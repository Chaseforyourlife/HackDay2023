from flask import Blueprint,make_response, request
from .functions import *
from api.db.mysql_functions import read_to_df
#from api.db.mysql_functions import *
import pandas as pd

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

    questionID = body["questionID"]
    title = body["title"]
    content = body["content"]
    userID = body["userID"]
    askedTime = body["askedTime"]

    pd.DataFrame = read_to_df("INSERT INTO questions VALUES (?, ?, ?, ?, ?)", (questionID, title, content, userID, askedTime))
    return make_response({
        "this worked"
    })

@blue_main.route('/add_comment', methods = ["POST"])
def add_comment():
    body = request.get_json(force = True)

    comemntID = body["commentID"]
    questionID = body["questionID"]
    answerID = body["answerID"]
    userID = body["userID"]
    content = body["content"]
    timestamp = body["timestamp"]

@blue_main.route('/add_answer', methods = ["POST"])
def add_answer():
    body = request.get_json(force = True)

    answerID = body["answerID"]
    userID = body["userID"]
    questionID = body["questionID"]
    timeAnswerID = body["timeAnswered"]
    contentID = body["content"]
    upvoteCountID = body["upvoteCount"]

    
@blue_main.route('/login', methods = ["POST"])
def login():
    return None

@blue_main.route('./post_question', methods = ["POST"])
def post_question():
    return None

