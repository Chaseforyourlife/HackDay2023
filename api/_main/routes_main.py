from flask import Blueprint,make_response, request
from .functions import *
from api.db.mysql_functions import read_to_df, upload_df, send_sql
from flask import session
#from api.db.mysql_functions import *
import pandas as pd
from datetime import datetime

blue_main = Blueprint('blue_main',__name__)

@blue_main.route('/test_route')
def test_route():
    test_df:pd.DataFrame = read_to_df("SELECT * FROM test_table")
    test_data_list = test_df["value"].to_list()
    return make_response({  
        'data':test_data_list
    })

@blue_main.route('/add_post', methods = ["POST"])
def add_post():
    body = request.get_json(force = True)
    
    userID = session['userID']
    title = body["title"]
    content = body["content"]
    askedTime = datetime.utcnow()

    question_df = pd.DataFrame({'title':[title],'content':[content],'askedTime':askedTime,'userID':[userID]})
    questionID = upload_df(question_df,"Questions",return_id=True)
    
    return make_response({
        'status':'success',
        'data':{
            'questionID':questionID
        }
    })

@blue_main.route('/add_comment', methods = ["POST"])
def add_comment():
    body = request.get_json(force = True)

    questionID = body["questionID"] or 0
    answerID = body["answerID"] or 0
    userID = session['userID']
    content = body["content"]
    timestamp = datetime.utcnow()

    comment_df = pd.DataFrame({'questionID':[questionID], 'answerID':[answerID], 'userID':[userID], 'content':[content], 'timestamp':[timestamp]})
    commentID = upload_df(comment_df, "Comments", return_id=True)
    return make_response({
        'status': 'success',
        'data':{
            'commentID': commentID
        }
    })

@blue_main.route('/add_answer', methods = ["POST"])
def add_answer():
    body = request.get_json(force = True)

    answerID = body["answerID"]
    userID = session['userID']
    questionID = body["questionID"]
    timeAnswered = datetime.utcnow()
    content = body["content"]
    
    answer_df = pd.DataFrame({'userID':[userID],'questionID':[questionID], 'timeAnswered':[timeAnswered], 'content': [content]})
    answerID = upload_df(answer_df, "Answers", return_id=True)
    return make_response({
        'status':'success',
        'data':{
            'answerID':answerID
        }
    })

    
@blue_main.route('/login', methods = ["POST"])
def login():
    form = request.get_json()
    email = form['email']
    user_info = get_user_info(email)
    password = user_info["password"]
    if form['password']==password:
        session['userID'] = user_info['userID']
        return make_response({
            'status':'success'
        })
    else: 
        return make_response({
            'status':'error'
        })

@blue_main.route('/register', methods = ["POST"])
def register():
    form = request.get_json()
    email = form['email']
    password = form['password']
    if get_user_info(email):
        return make_response({
            'status':'error',
            'error':'Email Already Registered'
        })
    else:
        userID = upload_df(pd.DataFrame({'email':[email],'password':[password]}),"Users")
        session['userID'] = userID
        return make_response({
            'status':'success'
        })
    
@blue_main.route('/set_tags/<questionID>', methods=["POST"])
def set_tags(questionID):
    body = request.get_json()
    tags = body["tags"]
    send_sql(f"Delete from QuestionTags where questionID={questionID}")
    tags_df = pd.DataFrame({'tagName':tags,'questionID':[questionID]*len(tags)})
    upload_df(tags_df,"QuestionTags")
    return make_response({
        'status':'success'
    })

@blue_main.route('/get_tags',methods=["GET"])
def get_tags():
    return make_response({'tags':read_to_df("select * from Tags")["tagName"].to_list()})

@blue_main.route('/add_tag', methods = ["POST"])
def add_tag():
    body = request.get_json(force = True)
    tagName = body["tagName"]
    tag_df = pd.DataFrame({'tagName':[tagName]})
    upload_df(tag_df, "Tags", return_id=True)
    return make_response({
        'status': 'success',
        'data':{
            'tagName':tagName
        }
    })

@blue_main.route('/print_session', methods=["POST"])
def print_session():
    userID = session['userID']
    return make_response({
        'status': 'success',
        'data':{
            'userID': userID
        }
    })

@blue_main.route('/logout', methods=["POST"])
def logout():
    session['userID'] = None
    return make_response({
        'status':'success'
    })
    
@blue_main.route("/vote",methods=["POST"])
def vote():
    data_json = request.get_json()
    userID = session['userID']
    contentID = data_json['contentID']
    voteType = data_json['voteType'] 
    isUpvote = bool(data_json['isUpvote'])
    if voteType not in ["question","answer","comment"]:
        return make_response({
            'status':'error',
            'error':"Invalid voteType"
        })
    vote_df = pd.DataFrame({'userID':[userID],'questionID':[contentID if voteType=='question' else 0],'answerID':[contentID if voteType=='answer' else 0],'commentID':[contentID if voteType=='comment' else 0],"isUpvote":isUpvote})
    upload_df(vote_df,"Votes")
    return make_response({
        'status':'success'
    })    

@blue_main.route("/unvote",methods=["POST"])
def unvote():
    body = request.get_json()
    unvoteType = body['unvoteType']
    if unvoteType not in ["question","comment","answer"]:
        return {'status':'error','error':'Invalid unvoteType'}
    
    send_sql(f"""DELETE FROM Votes 
        WHERE userID={session['userID'] or  0} 
        AND questionID={body['contentID'] if unvoteType=='question' else 0} 
        AND commentID={body['contentID'] if unvoteType=='comment' else 0}
        AND answerID={body['contentID'] if unvoteType== 'answer' else 0}
    """)
    return make_response({
        'status':'success'
    })

@blue_main.route('/get_posts', methods=["GET"])
def get_posts():
    get_posts_df:pd.DataFrame = read_to_df(f"SELECT * FROM Questions WHERE questionID <> 0")
    questions = get_posts_df.to_dict(orient='records')
    tag_df = read_to_df("select * from QuestionTags")
    tag_df_grouped = tag_df.groupby('questionID')
    tag_list_dict = {questionID:[] for questionID in read_to_df("select * from Questions")["questionID"].to_list()}
    for key,group_df in tag_df_grouped:
        tag_list_dict[key] = group_df['tagName'].to_list()
    for question in questions:
        question['tagList'] = tag_list_dict[question['questionID']]

    return make_response(
        {
            "status":"success",
            "questions":questions
        }
    )


@blue_main.route('/get_user_posts', methods =["GET"])
def get_user_posts():
    userID = session['userID']
    get_users_posts_df:pd.DataFrame = read_to_df(f"SELECT * FROM Questions WHERE userID = {userID}")
    return make_response(
        {
            "status":"success",
            "userPosts": get_users_posts_df.to_dict(orient='records')
        }
    )

@blue_main.route('/get_post/<questionID>',methods=["GET"])
def get_post(questionID):
    questionInfo=read_to_df(f"select * from Questions join Users on Questions.userID=Users.userID where Questions.questionID = {questionID}").to_dict(orient='records')[0]
    tagList = read_to_df(f"Select * from QuestionTags where questionID = {questionID}")["tagName"].to_list()
    questionInfo["tagList"] = tagList
    voteInfoQuestion = read_to_df(f"SELECT SUM(CASE WHEN isUpvote=1 THEN 1 ELSE 0 END) as numUpvotes,SUM(CASE WHEN isUpvote=0 THEN 1 ELSE 0 END) as numDownvotes from Votes where questionID = {questionID}").to_dict(orient='records')[0]
    questionComments=read_to_df(f"select * from Comments where questionID = {questionID} and answerID = 0").to_dict(orient='records')
    answers = read_to_df(f"select * from Answers where questionID = {questionID}").to_dict(orient='records')
    voteInfoAnswers = read_to_df(f"""
        SELECT Answers.answerID,SUM(CASE WHEN Votes.isUpvote=1 THEN 1 ELSE 0 END) as numUpvotes,SUM(CASE WHEN Votes.isUpvote=0 THEN 1 ELSE 0 END) as numDownvotes from Votes 
        join Answers on Votes.answerID=Answers.answerID 
        where Answers.questionID = {questionID} 
        and Answers.questionID <> 0
        group by Answers.answerID
    """).set_index('answerID').to_dict(orient='index')
    voteInfoComments = read_to_df(f"""
        SELECT Comments.commentID,SUM(CASE WHEN Votes.isUpvote=1 THEN 1 ELSE 0 END) as numUpvotes,SUM(CASE WHEN Votes.isUpvote=0 THEN 1 ELSE 0 END) as numDownvotes from Votes 
        join Comments on Comments.commentID = Votes.commentID 
        join Answers on Answers.answerID = Comments.answerID 
        where Answers.questionID = {questionID} 
        and Comments.commentID <> 0
        group by Comments.commentID
    """).set_index('commentID').to_dict(orient='index')
    answerComments_df = read_to_df(f"select * from Comments join Answers on Comments.answerID = Answers.answerID where Answers.questionID = {questionID}")
    answerComments_grouped_df = answerComments_df.groupby('answerID')
    answerComments = {}
    for key,group_df in answerComments_grouped_df:
        group_dict = group_df.to_dict(orient='records')
        answerComments[key] = group_dict

    return make_response({
        'questionInfo':questionInfo,
        'questionComments':questionComments,
        'answers':answers,
        'answerComments':answerComments,
        'voteInfoQuestion':voteInfoQuestion,
        'voteInfoAnswers':voteInfoAnswers,
        'voteInfoComments':voteInfoComments
    })