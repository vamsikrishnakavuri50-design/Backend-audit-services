import { useNavigate } from "react-router-dom";

function UserNavBar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ color: "#60a5fa" }}>
        BankSecure User Portal
      </h2>

      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default UserNavBar;