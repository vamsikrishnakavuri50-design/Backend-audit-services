from fastapi import APIRouter
import requests

router = APIRouter()

SPRING_SERVICE = "http://localhost:8081"

@router.get("/")
def get_alerts():
    response = requests.get(
        f"{SPRING_SERVICE}/alerts"
    )

    return response.json()