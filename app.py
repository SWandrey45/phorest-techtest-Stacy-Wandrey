from flask import Flask, render_template
from requests.auth import HTTPBasicAuth
import simplejson as json
from flask import jsonify
from flask_cors import CORS


import requests

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')



# While it goes against clean code as it isn't used, the commented out code below is a flask view that correctly connects to the API
# I left it here so you can see I tried other things before finding ajax works better. This API call works, but it was more difficult to figure out how to manipulate the json and pass it to the JavaScript. So I found a more simple way :) 



# @app.route('/json', methods=['GET'])
# def getJson(customerType, customerInfo):
#     result2 = requests.get('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?firstName=John', auth=('global/cloud@apiexamples.com', 'VMlRo/eh+Xd8M~l'))
#     print(result2)
#     print(json.dumps(result2))
#     return 