from fastapi import APIRouter
import requests

router = APIRouter()

USER_SERVICE = "http://localhost:8081"
LOG_SERVICE = "http://localhost:5000"

@router.get("/")
def dashboard_stats():

    users = requests.get(
        f"{USER_SERVICE}/users"
    ).json()

    logs = requests.get(
        f"{LOG_SERVICE}/logs"
    ).json()

    alerts = requests.get(
        f"{USER_SERVICE}/alerts"
    ).json()

    failed_logins = [
        log for log in logs
        if log.get("status") == "FAILED"
    ]

    return {
        "totalUsers": len(users),
        "totalLogs": len(logs),
        "totalAlerts": len(alerts),
        "failedLogins": len(failed_logins)
    }