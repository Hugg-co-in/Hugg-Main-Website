import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await axios.post("/api/v1/users/logout").then(() => {
      dispatch(logout());
      alert("Logout Successfully");
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none"
    >
      Logout
    </button>
  );

  // <div className="">LogoutBtn</div>;
};

export default LogoutBtn;
