import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(auth);
    navigate("/Welcome", { replace: true });
  };
  return (
    <div>
      <div className="h-16 border-b-2 border-gray-200 flex items-center px-5">
        <h4 className="text-2xl text-[#333333] font-bold">Settings</h4>
      </div>
      <div className="mt-5 flex flex-col items-start">
        <button
          onClick={logOut}
          className="border-b-2 text-lg fond-medium text-[#DE5D58] border-t-2 border-gray-200 w-full blockp px-5 py-3"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Settings;
