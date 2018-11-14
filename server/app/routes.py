from app import app
from flask import request, jsonify
from app.item import Items
import json

items = Items()

success = json.dumps({'success':True}), 200, {'ContentType':'application/json'}

class InvalidUsage(Exception):
    status_code = 400
    
    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv



@app.route('/')
@app.route('/index')
def index():
    return "React-Crud-App API"


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


@app.route('/item', methods=['POST', 'GET'])
def item():
    if request.method == 'POST':
        print(request.form['value'])
        if 'value' not in request.form or 'id' not in request.form:
            raise InvalidUsage('Must include "value" and "id" fields')
        else:
            try:
                items.connect()
                items.add_item(request.form['value'], request.form['id'])
                items.disconnect()
                return success
            except(e):
                raise InvalidUsage('There was an error')
    elif request.method == 'GET':
        try:
            items.connect()
            vals = items.get_all()
            items.disconnect()
        except(e):
            raise InvalidUsage('There was an error')
        return json.dumps(vals)