from api.db.mysql_functions import *
def get_user_info(email):
    user_df = read_to_df(f"select * from Users where email = '{email}'").to_dict(orient='records')
    if len(user_df)==0:
        return None
    else:
        return user_df[0]
    
