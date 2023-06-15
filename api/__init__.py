from flask import Flask
from flask_session import Session
import secrets
import redis

app = Flask(__name__)

secret = secrets.token_urlsafe(32)
app.secret_key = secret
app.config["SECRET_KEY"] = secret
#app.config["SESSION_PERMANENT"] = False
#app.config["SESSION_TYPE"] = "redis"
#app.config["SESSION_USE_SIGNER"] = True
#app.config["SESSION_REDIS"] = redis.from_url("redis://127.0.0.1:6379")

#server_session = Session(app)

from api._main.routes_main import blue_main
app.register_blueprint(blue_main,url_prefix="/api/main")