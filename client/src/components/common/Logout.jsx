import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/authUtils";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login"); // Redirect after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
