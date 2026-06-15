import { useEffect, useState } from "react";
import API from "../services/AuditApi";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API.get("/logs")
      .then((res) => {
        setLogs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1 className="page-title">
        Audit Logs
      </h1>

      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Activity</th>
            <th>Status</th>
            <th>Date & Time</th>
          </tr>
        </thead>

        <tbody>

         {logs.map((log) => (
  <tr key={log.id}>
    <td>{log.username}</td>
    <td>{log.activity}</td>
    <td>{log.status}</td>
    <td>
      {new Date(log.timestamp).toLocaleString()}
    </td>
  </tr>
))}


        </tbody>
      </table>
    </>
  );
}

export default Logs;