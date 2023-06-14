from api import app

if __name__ == '__main__':
    # if debug is true, apscheduler runs twice, which causes problems
    #app.run(debug=False)
    app.run(debug=True)