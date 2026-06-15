import { useEffect, useState } from "react";
import API from "../services/Api";

function MyActivities() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {

    const username =
      localStorage.getItem("username");

    API.get(`/activity/${username}`)
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <div>

      <h1 className="page-title">
        My Activities
      </h1>

      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Status</th>
            <th>Date & Time</th>
          </tr>
        </thead>

        <tbody>

          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.activity}</td>
              <td>{activity.status}</td>
              <td>
                {activity.timestamp
                  ? new Date(
                      activity.timestamp
                    ).toLocaleString()
                  : "-"}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MyActivities;