from flask import Blueprint, request, jsonify
import openai
from config import OPENAI_API_KEY

recommendation_routes = Blueprint('recommendation_routes', __name__)

# Initialize OpenAI API key
openai.api_key = OPENAI_API_KEY

@recommendation_routes.route('/recommendations', methods=['POST'])
def generate_recommendations():
    user_data = request.json
    prompt = f"Generate personalized product recommendations for a user with the following profile: {user_data}"
    response = openai.Completion.create(
        model="gpt-3.5-turbo",
        prompt=prompt,
        max_tokens=1024,
        temperature=0.7,
    )
    recommendations = response.choices[0].text  # Corrected to access the first choice
    return jsonify({"recommendations": recommendations})
