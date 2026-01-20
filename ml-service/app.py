from fastapi import FastAPI
import joblib
import pandas as pd

app = FastAPI()

# Load model
model = joblib.load("model/college_predictor_model.pkl")

@app.post("/predict")
def predict(data: dict):
    input_df = pd.DataFrame([{
        "year": data["year"],
        "institute_type": data["institute_type"],
        "round_no": data["round_no"],
        "category": data["category"],
        "opening_rank": data["opening_rank"],
        "is_preparatory": data["is_preparatory"]
    }])

    predicted_cutoff = model.predict(input_df)[0]

    student_rank = data["student_rank"]

    if student_rank <= predicted_cutoff:
        chance = "High"
    elif student_rank <= predicted_cutoff + 2000:
        chance = "Medium"
    else:
        chance = "Low"

    return {
        "predicted_cutoff": int(predicted_cutoff),
        "chance": chance
    }
