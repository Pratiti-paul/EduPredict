import joblib
import pandas as pd
import sys

try:
    model = joblib.load("model.pkl")
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    sys.exit(1)

data = {
    "year": 2023,
    "institute_type": "IIT",
    "round_no": 6,
    "category": "OPEN",
    "opening_rank": 100,
    "is_preparatory": 0
}

try:
    df = pd.DataFrame([data])
    print("DataFrame created:")
    print(df)
    prediction = model.predict(df)[0]
    print(f"Prediction: {prediction}")
except Exception as e:
    print(f"Error during prediction: {e}")
