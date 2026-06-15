from fastapi import APIRouter
import requests
from datetime import datetime

router = APIRouter()

LOG_SERVICE = "http://localhost:5000"

@router.get("/")
def get_logs():

    response = requests.get(f"{LOG_SERVICE}/logs")

    requests.post(
        "http://localhost:5000/logs",
        json={
            "action": "GET_LOGS",
            "username": "bank_admin",
            "status": "SUCCESS",
            "timestamp": datetime.utcnow().isoformat()
        }
    )

    return response.json()