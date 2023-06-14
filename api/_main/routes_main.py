from flask import Blueprint,make_response
from .functions import *

blue_main = Blueprint('blue_main',__name__)

@blue_main.route('/test_route')
def test_route():

    return make_response({
        'data':['Chase','Leo','Kenny','Lydia', 'Angelo','Cameron','Jack','Randy']
    })


