import os, sys, errno
from flask import Flask, render_template
# from db.database_psql import db
from waitress import serve

app = Flask(__name__, static_folder='./static', template_folder='./')
# db.init_app(app)

# Turns off the modifications tracking system to save system resources.
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# security recommendation, just do it
app.config['SESSION_COOKIE_SECURE'] = True
# Setting this to False prevents the Flask jsonify() function from printing line breaks and
# indentation. All of the api return values pass through the jsonify() function.
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

if os.environ.get("TESTING") == 'TRUE':
    app.config['DEBUG'] = True

try:
    ### IO operation ###
    print('Starting server')
except IOError:
    print(IOError.errno)
    if IOError.errno == errno.EPIPE:
        print(IOError.errno)

# We will want to set up Dev/Prod profiles somewhere
# POSTGRES = {
#     'user': 'postgres',
#     'pw': 'password',
#     'db': 'activunite',
#     'host': 'localhost',
#     'port': '5432',
# }
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
# %(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES


@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.config['DEBUG'] = True
    # Use waitress to host the application
    serve(app, host='0.0.0.0', port=7777)
