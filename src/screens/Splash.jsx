import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const Splash = () => {
  const navigate = useNavigate();
  const { user } = useAuthentication();
  useEffect(() => {
    const checkFirstLogin = () => {
      user
        ? navigate("/home", { replace: true })
        : navigate("/Welcome", { replace: true });
    };
    setTimeout(() => checkFirstLogin(), 5000);
  }, []);

  return (
    <div className="w-full h-screen bg-[#DE5D58] flex justify-center items-center">
      <img src={"/assets/defaults/logo.png"} width={100} height={100} />
    </div>
  );
};

export default Splash;
