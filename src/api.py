from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, origins='http://localhost:8000')
api = Api(app)

@api.resource('/')
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

if __name__ == "__main__":
    app.run()
