from flask import *
from flask_cors import CORS, cross_origin
from yelp_api import anime_list

app = Flask(__name__)
CORS(app, support_credentials=True)
@app.route('/<name>', methods=['GET'])
@cross_origin(supports_credentials=True)
def home(name):
    return anime_list(name)
    

if __name__ == '__main__':
    app.run(debug=True,port=4000)
