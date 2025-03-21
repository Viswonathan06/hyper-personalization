from flask import Blueprint, request, jsonify

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/register', methods=['POST'])
def register_user():
    data = request.json
    # Process user registration logic here
    return jsonify({"message": "User registered successfully"})
