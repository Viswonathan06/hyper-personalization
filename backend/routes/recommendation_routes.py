from flask import Blueprint, request, jsonify
from openai import OpenAI
from config import OPENAI_API_KEY
# Load model directly
from transformers import AutoModel
from transformers import BertTokenizer, BertForSequenceClassification
import torch
tokenizer = BertTokenizer.from_pretrained("google-bert/bert-base-uncased")



client = OpenAI()

recommendation_routes = Blueprint('recommendation_routes', __name__)

# Initialize OpenAI API key
from google import genai



@recommendation_routes.route('/chatbot', methods=['POST'])
def generate_recommendations(prompt):
    user_data = request.json
    client = genai.Client(api_key="AIzaSyAGDS1qcT-mOoL7tfSZ-vhfUKXrwaMNW68")
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )
    return jsonify({"recommendations": response.text})
