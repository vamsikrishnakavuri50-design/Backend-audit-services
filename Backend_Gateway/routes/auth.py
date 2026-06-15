from fastapi import APIRouter, HTTPException
import httpx
import requests
from datetime import datetime
from collections import defaultdict

router = APIRouter()

SPRING_URL = "http://localhost:8081"
LOG_SERVICE = "http://localhost:5000"

failed_attempts = defaultdict(int)


@router.post("/login")
async def login(data: dict):

    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{SPRING_URL}/auth/login",
            json=data
        )

    result = response.json()
    username = data["username"]

    if response.status_code == 200:

        failed_attempts[username] = 0

        requests.post(
            f"{LOG_SERVICE}/logs",
            json={
                "action": "LOGIN",
                "username": username,
                "status": "SUCCESS",
                "timestamp": datetime.utcnow().isoformat()
            }
        )

        return result

    failed_attempts[username] += 1

    requests.post(
        f"{LOG_SERVICE}/logs",
        json={
            "action": "LOGIN",
            "username": username,
            "status": "FAILED",
            "timestamp": datetime.utcnow().isoformat()
        }
    )

    if failed_attempts[username] >= 3:

        requests.post(
            f"{SPRING_URL}/alerts",
            json={
                "alertType": "MULTIPLE_FAILED_LOGINS",
                "severity": "HIGH",
                "description": f"User {username} failed login 3 times"
            }
        )

        failed_attempts[username] = 0

    raise HTTPException(
        status_code=401,
        detail="Invalid username or password"
    )