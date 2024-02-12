import flask
import json
from flask import jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def index():
    return 'Here is nothing to see, go to /api/projects to see the projects.'

@app.route('/api/blog/posts', strict_slashes=False)
def blog_posts():
    with open('./posts.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)

@app.route('/api', strict_slashes=False)
def api():
    return 'API'

@app.route('/api/projects', strict_slashes=False)
def projects():
    with open('./projects.json', 'r') as file:
        return json.load(file)

@app.errorhandler(404)
def page_not_found(e):
        print(e)
        return 'Invalid Page', 404

if __name__ == '__main__':
    app.run(debug=True)

