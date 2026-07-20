from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import pickle


# --------------------
# Create FastAPI app
# --------------------
app = FastAPI(
    title="Shop Sales Prediction API",
    version="1.0"
)


#--------------------
# CORS middleware 
# - Without CORS, the React frontend on Vercel won't be able to call the API on Render
#--------------------
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # We'll restrict this after deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------
# Load model once
# --------------------
with open("Final_Model.pkl", "rb") as file:
    model = pickle.load(file)


# --------------------
# Input model
# --------------------
class ShopInput(BaseModel):

    store_ID: int
    day_of_week: int
    date: str
    nb_customers_on_day: int
    promotion: int
    state_holiday: str
    school_holiday: int


# --------------------
# Home endpoint
# --------------------
@app.get("/")
def home():

    return {
        "message": "Shop Sales Prediction API is running!"
    }


# --------------------
# Health endpoint
# --------------------
@app.get("/health")
def health():

    return {
        "status": "ok"
    }


# --------------------
# Prediction endpoint
# --------------------
@app.post("/predict")
def predict(data: ShopInput):

    df = pd.DataFrame([data.model_dump()])

    # Convert date exactly as in training
    df["date"] = pd.to_datetime(df["date"])

    df["year"] = df["date"].dt.year
    df["month"] = df["date"].dt.month
    df["day"] = df["date"].dt.day

    df.drop(columns="date", inplace=True)

    prediction = model.predict(df)

    return {
        "predicted_sales": round(float(prediction[0]), 2)
    }


from pydantic import BaseModel, Field


#--------------------
# Input model with validation
# - Validate day_of_week - enforce valid values (1–7) using Pydantic:
#--------------------
class ShopInput(BaseModel):
    store_ID: int
    day_of_week: int = Field(..., ge=1, le=7)
    date: str
    nb_customers_on_day: int = Field(..., ge=0)
    promotion: int
    state_holiday: str
    school_holiday: int

