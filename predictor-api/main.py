from fastapi import FastAPI
import joblib
import pandas as pd

app = FastAPI()

# Load model once at startup
model = joblib.load("model.pkl")

# Mappings based on common label encoding 
# (Note: These should ideally match the training encoder exactly. 
# If training used LabelEncoder, order is alphabetical usually)
INSTITUTE_MAP = {
    "IIT": 0,
    "NIT": 1,
    "IIIT": 2,
    "GFTI": 3
}

CATEGORY_MAP = {
    "OPEN": 0,
    "EWS": 1,
    "OBC-NCL": 2,
    "SC": 3,
    "ST": 4
}

@app.post("/predict")
def predict(data: dict):
    # Convert categorical strings to integers
    inst_type = INSTITUTE_MAP.get(data["institute_type"], 0) # Default to 0 if not found
    category = CATEGORY_MAP.get(data["category"], 0)
    
    df = pd.DataFrame([{
        "year": int(data["year"]),
        "institute_type": inst_type,
        "round_no": int(data["round_no"]),
        "category": category,
        "opening_rank": float(data["opening_rank"]),
        "is_preparatory": int(data["is_preparatory"])
    }])

    prediction = model.predict(df)[0]

    return {
        "predicted_cutoff": int(prediction)
    }

