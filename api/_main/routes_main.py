from flask import Blueprint,make_response
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


