import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/authProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://hexagon-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const loggingInUser = users.find(user => user.email === email)
    console.log(loggingInUser);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast("Login successful");
        setTimeout(() => {
          navigate("/")
        }, 2000)
        //axios
      })
      .catch((error) => {
        console.log(error.code);
        if(error.code == 'auth/invalid-credential')
          toast("Invalid Email or Password");
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast("Login successful");
        setTimeout(() => {
          navigate("/")
        }, 2000)   
      })
      .catch((error) => console.log(error.message));
  };
  return (
      
      <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-[#222831] to-[#393E46] ">  
      <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-[#00ADB5] bg-[#EEEEEE] py-20 px-5">
          <h1 className="text-[#00ADB5] text-center text-3xl font-bold">
            Sign in
          </h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-opacity-0 border-[#00ADB5] hover:bg-opacity-0 hover:border-[#00ADB5]">
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center">
            <p>
              New here?{" "}
              <Link className="text-[#00ADB5] underline" to="/registration">
                Sign Up
              </Link>
            </p>
            <br />
            <br />
            <p>
              Sign in with{" "}
              <button onClick={handleGoogleSignIn}>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">OO</span>
                <span className="text-[#F4B400]">G</span>
                <span className="text-[#0F9D58]">LE</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignIn;
