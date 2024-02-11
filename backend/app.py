import pandas as pd
import numpy as np
import joblib
from flask import Flask,request, jsonify
from flask_restful import Resource, Api
import pickle
import pandas as pd 
from flask_cors import CORS
import joblib
from pred import ret 


app = Flask(__name__)
CORS(app)

@app.route("/")
def hap():
    return "maow"


@app.route("/predict/<int:date>")
def predict(date):
    try:
        loaded_model = joblib.load('linear_regression_model.joblib')
        prompt_day = date
        predicted_price = loaded_model.predict([[prompt_day]])
        p=ret()
        result_dict = {'predicted_price': predicted_price[0], 'original_data': p}
        return(jsonify(result_dict))
    except ValueError:
            return jsonify({"error": "Invalid input. Please provide valid float values for parameters."})

if __name__ == '__main__':
    app.run(debug=True)
