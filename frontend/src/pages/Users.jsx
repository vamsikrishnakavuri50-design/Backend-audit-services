import { useEffect, useState } from "react";
import API from "../services/AuditApi";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users");

      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async () => {
    try {
      const response = await API.post(
        "/users",
        newUser
      );

      setUsers([
        ...users,
        response.data,
      ]);

      setShowForm(false);

      setNewUser({
        username: "",
        email: "",
        password: "",
        role: "USER",
      });

      alert("User Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed To Add User");
    }
  };

  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);

      setUsers(
        users.filter(
          (user) =>
            user.userId !== id
        )
      );

      alert("User Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed To Delete User");
    }
  };

  const filteredUsers =
    users.filter((user) =>
      user.username
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <h1 className="page-title">
        Users Management
      </h1>

      <div className="toolbar">

        <input
          type="text"
          placeholder="🔍 Search User..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-box"
        />

        <button
          className="add-btn"
          onClick={() =>
            setShowForm(true)
          }
        >
          + Add User
        </button>

      </div>

      {showForm && (

        <div className="modal">

          <div className="modal-content">

            <h2>Add User</h2>

            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  username:
                    e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  email:
                    e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  password:
                    e.target.value,
                })
              }
            />

            <select
              value={newUser.role}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  role:
                    e.target.value,
                })
              }
            >
              <option value="USER">
                USER
              </option>

              <option value="AUDITOR">
                AUDITOR
              </option>
            </select>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <button
                className="add-btn"
                onClick={addUser}
              >
                Save
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>
            </div>

          </div>

        </div>

      )}

      <table className="users-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredUsers.map(
            (user) => (

              <tr
                key={user.userId}
              >
                <td>
                  {user.userId}
                </td>

                <td>
                  {user.username}
                </td>

                <td>
                  {user.email}
                </td>

                <td>
                  <span className="role-badge">
                    {user.role}
                  </span>
                </td>
// Added search functionality
                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteUser(
                        user.userId
                      )
                    }
                  >
                    Delete
                  </button>

                </td>
              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Users;