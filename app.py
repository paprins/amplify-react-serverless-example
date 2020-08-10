import os
import time
from datetime import datetime
from flask import Flask
from flask import g, request, jsonify
from flask_cors import CORS
from flask_cognito import current_user
import logging

app = Flask(__name__)
CORS(app)

app.logger.setLevel(logging.DEBUG)

@app.before_request
def before_request():
    app.logger.debug('>> BEFORE_REQUEST')

@app.after_request
def after_request(response):
    app.logger.debug('>> AFTER_REQUEST')
    return response

@app.route("/test")
def hello():
  app.logger.debug('>> fn::hello') 
  return "You must have authenticated correctly."

@app.route("/docs", methods=['GET'])
def show_documents():
  """
  Shows all available documents for the current authorized users
  :return: an array of document objects or an ampty array if not documents are available
  """
  app.logger.debug('>> fn::docs') 
  app.logger.info(f'request.headers={request.headers}')
  app.logger.info(f'request.context={request.args}')
  app.logger.info(f'current_user={current_user}')
  # user = get_user_from_authorizer(app.current_request.context)
  return dict(
    docs = []
  )