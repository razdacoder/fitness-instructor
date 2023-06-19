import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/authSlice";
import Spinner from "./../components/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      dispatch(
        setUser({
          uid: docSnap.id,
          ...docSnap.data(),
        })
      );
      setLoading(false);
      navigate("/home", { replace: true });
    } catch (err) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };
  return (
    <div className="w-full h-screen bg-[#DE5D58]  flex flex-col justify-center items-center">
      <div className="h-2/6 flex justify-center items-center">
        <img src={"/assets/defaults/logo.png"} width={100} height={100} />
      </div>

      <div className=" h-4/6">
        <h4 className="text-white text-5xl mb-8 font-bold">Login</h4>
        <form className="flex flex-col gap-y-3" onSubmit={onLogin}>
          <div className="mb-1">
            <label
              className="text-white block mb-3 text-xl font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full outline-none py-3 rounded-md text-lg px-3"
              type="email"
              onChange={(e) =>
                setformData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-1">
            <label
              className="text-white block mb-3 text-xl font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full outline-none py-3 rounded-md text-lg px-3"
              type="password"
              onChange={(e) =>
                setformData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-1">
            <button
              type="submit"
              className="bg-white w-full block text-[#DE5D58] font-medium px-32 py-3 text-2xl rounded-md"
            >
              {loading ? <Spinner /> : "Login"}
            </button>
          </div>
        </form>
        <Link
          to={"/Welcome"}
          className="flex justify-center items-center mt-5 text-lg font-medium text-white"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Login;