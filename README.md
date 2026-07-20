# 🛒 Shop Sales Predictor

A full-stack Machine Learning web application that predicts daily retail shop sales using an XGBoost regression model.

**🚀 Live Demo:** https://w2-iron-kaggle-mini-project-pearl.vercel.app

**📚 API Documentation:** https://w2-ironkaggle-mini-project.onrender.com/docs

<br>

---

## 📖 About

This project was developed as part of the IronHack AI Engineering Bootcamp.

The application predicts a store's daily sales based on several business variables such as:

- Store ID
- Day of Week
- Date
- Number of Customers
- Promotion
- State Holiday
- School Holiday

The machine learning model is served through a FastAPI REST API and consumed by a modern React frontend.

<br>

---

## ✨ Features

- 📈 Predict daily sales using an XGBoost model
- ⚡ FastAPI REST API
- 🎨 React + Vite frontend
- 🌐 Deployed on Render and Vercel
- 📱 Responsive UI
- 📚 Interactive Swagger API documentation

<br>

---

## 🖥️ Live Demo

Frontend : https://w2-iron-kaggle-mini-project-pearl.vercel.app

Backend API : https://w2-ironkaggle-mini-project.onrender.com

Swagger : https://w2-ironkaggle-mini-project.onrender.com/docs

<br>

---

## 🛠 Tech Stack

### Machine Learning

- Python
- Scikit-learn
- XGBoost
- Pandas
- NumPy

### Backend

- FastAPI
- Uvicorn
- Pydantic

### Frontend

- React
- Vite
- Axios
- Tailwind CSS
- React Hook Form

### Deployment

- Render
- Vercel
- GitHub

<br>

---

## 📊 Dataset

The project uses a historical retail sales dataset containing over **530,000 observations**.

Features include:

- Store ID
- Day of Week
- Date
- Number of Customers
- Promotion
- State Holiday
- School Holiday

Target variable:

- Daily Sales (€)

<br>

---

## 🤖 Machine Learning Pipeline

Data preprocessing:

- Convert dates into Year, Month and Day
- Remove closed stores
- Standardize numerical features
- One-Hot Encode categorical features

Model:

- XGBoost Regressor

Model Selection:

- Hyperparameter tuning
- Validation set evaluation
- Final model serialized using Pickle

<br>

---

## 📂 Project Structure

```
.
├── backend
│   ├── app.py
│   ├── Final_Model.pkl
│   ├── requirements.txt
│   └── render.yaml
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── notebook
│
└── README.md
```

<br>

---

## 🚀 Installation

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

Runs on

```
http://localhost:8000
```

<br>

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

<br>

---

## API Example

POST

```
/predict
```

Example Request

```json
{
  "store_ID":404,
  "day_of_week":3,
  "date":"2014-03-19",
  "nb_customers_on_day":657,
  "promotion":1,
  "state_holiday":"0",
  "school_holiday":0
}
```

Example Response

```json
{
  "predicted_sales":6154.53
}
```

<br>

---

## Future Improvements

- 🌙 Dark Mode
- 📊 Interactive Charts
- 📈 Prediction Confidence
- 🗂 Historical Store Statistics
- 📱 Progressive Web App
- 🐳 Docker Support
- 🔐 User Authentication

<br>

---

## Author

Antonio Traquinas

GitHub - https://github.com/wtraquinas

LinkedIn - https://www.linkedin.com/in/antonio-traquinas/

<br>

---