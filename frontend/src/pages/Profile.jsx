import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

  const [user, setUser] = useState({});

  useEffect(() => {

    const username =
      localStorage.getItem("username");

    axios
      .get(`http://localhost:8081/profile/${username}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <>
      <h1 className="page-title">
        My Profile
      </h1>

      <div className="profile-card">

        <div className="profile-row">
          <strong>Username:</strong>
          {user.username}
        </div>

        <div className="profile-row">
          <strong>Email:</strong>
          {user.email}
        </div>

        <div className="profile-row">
          <strong>Role:</strong>
          {user.role}
        </div>

        <div className="profile-row">
          <strong>Status:</strong>
          {user.status}
        </div>

      </div>
    </>
  );
}

export default Profile;