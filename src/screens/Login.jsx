import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import { setUser } from "../slices/authSlice";
import Spinner from "./../components/Spinner";

// 328SPAEjFdgK22sT
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    let { data: profiles, error: profileErr } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user.id);

    if (profileErr) {
      setError(profileErr.message);
      setLoading(false);
      return;
    }
    const User = {
      user: data.user,
      profile: profiles[0],
    };
    dispatch(setUser(User));
    setLoading(false);
    navigate("/home", { replace: true });
  };
  return (
    <div className="w-full h-screen bg-[#DE5D58]  flex flex-col justify-center items-center">
      <div className="h-2/6 flex justify-center items-center">
        <img src={"/assets/defaults/logo.png"} width={100} height={100} />
      </div>

      <div className=" h-4/6">
        <h4 className="text-white text-5xl mb-8 font-bold">Login</h4>
        <p className="text-white">{err}</p>
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
              {loading ? "..." : "Login"}
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
