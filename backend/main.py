import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/api')
def api():
    return 'API'

@app.route('/api/projcets')
def projects():
    return 'Projects'

if __name__ == '__main__':
    app.run(debug=True)

