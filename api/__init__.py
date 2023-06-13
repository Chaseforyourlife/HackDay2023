from flask import Flask

app = Flask(__name__)





from api._main.routes_main import blue_main
app.register_blueprint(blue_main,url_prefix="/api/main")