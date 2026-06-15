import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        padding: "15px",
        fontSize: "22px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span>BankSecure Admin Dashboard</span>

      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
        style={{
          padding: "8px 15px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default NavBar;