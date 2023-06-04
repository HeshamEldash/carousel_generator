from flask import Flask, redirect, render_template, request, url_for, jsonify
from flask_cors import CORS

import openai
import json

app = Flask(__name__)

app.config["DEBUG"] = True

CORS(app)


RESPONSE_STRUCTURE =     json.dumps('{"title":first point, "middle_points":[points], "summery":summery}')

@app.route("/", methods=("GET", "POST"))
def index():
    article_url = request.args.get("article_url")
    number_of_points = request.args.get("number_of_points", 5)
   
    if article_url:
        response = openai.Completion.create(
        model="text-davinci-003",
        prompt=generate_prompt(article_url, number_of_points),
        temperature=0.6,
        max_tokens= 2020
        
        )
        return  jsonify({"response" : json.loads((response.choices[0].text))})
    
    else: return 'bad request!', 400
    
    
    
def generate_prompt(article_url, number_of_points):
    print(number_of_points)
    example_response =json.dumps( {
  "response": {
    "title": "A Comprehensive Guide to Machine Learning",
    "middle_points": [
  
    ],
    "summary": "Explore the world of Machine Learning through this comprehensive guide, covering its definition, algorithms, applications, challenges, and ethical considerations."
  }
})
    
    
    return  f"Summarize  this article {article_url} in {10} short points .\
            the middle_points should be the same number as {number_of_points}.\
            each point should not exceed 20 words.\
            on top of the points, Generate a title at the begening and a short 20 word summery at the end.\
            The response should be in a json format of {RESPONSE_STRUCTURE}\
                example response {example_response}"
           

    
app.run()







