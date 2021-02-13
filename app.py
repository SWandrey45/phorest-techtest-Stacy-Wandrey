from flask import Flask, render_template
from flask_basicauth import BasicAuth
import requests

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')