from flask import Flask
from flask_cors import CORS
from routes.user_routes import user_routes
from routes.recommendation_routes import recommendation_routes

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(recommendation_routes, url_prefix='/api/recommendations')

if __name__ == '__main__':
    app.run(debug=True, port=8000)
