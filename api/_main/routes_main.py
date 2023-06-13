from flask import Blueprint
from .functions import *

blue_main = Blueprint('blue_main',__name__)

blue_main.register_blueprint(blue_main,url_prefix='/functions')

