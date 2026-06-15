from fastapi import APIRouter
import requests
from datetime import datetime

router = APIRouter()

USER_SERVICE = "http://localhost:8081"
LOG_SERVICE = "http://localhost:5000"


@router.get("")
def get_users():

    response = requests.get(
        f"{USER_SERVICE}/users/normal"
    )

    return response.json()


@router.post("")
def create_user(data: dict):

    response = requests.post(
        f"{USER_SERVICE}/users",
        json=data
    )

    requests.post(
        f"{LOG_SERVICE}/logs",
        json={
            "action": "CREATE_USER",
            "username": data.get("username"),
            "status": "SUCCESS",
            "timestamp": datetime.utcnow().isoformat()
        }
    )

    return response.json()


@router.delete("/{user_id}")
def delete_user(user_id: int):

    response = requests.delete(
        f"{USER_SERVICE}/users/{user_id}"
    )

    requests.post(
        f"{LOG_SERVICE}/logs",
        json={
            "action": "DELETE_USER",
            "username": "bank_admin",
            "status": "SUCCESS",
            "timestamp": datetime.utcnow().isoformat()
        }
    )

    return {
        "message": response.text
    }