from flask import Flask, render_template
from flask_basicauth import BasicAuth
from requests.auth import HTTPBasicAuth
import simplejson as json
from flask import jsonify


import requests

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')



# @app.route('/json', methods=['GET'])
# def getJson(customerType, customerInfo):
#     result2 = requests.get('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?firstName=John', auth=('global/cloud@apiexamples.com', 'VMlRo/eh+Xd8M~l'))
#     print(result2)
#     print(json.dumps(result2))
#     return 