import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/authProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Registration = () => {

    const { createNewUser,updateNewUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const email  = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photourl.value;
        const role = 'user';
        const fraud = 'no';

        const newUser = {
          email,
          name,
          role,
          fraud,
          photo 
        };

        fetch(
          "http://localhost:3000/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        if(!(/[A-Z]/.test(password))){
         return toast('Password should have atleast one capital letter');
          
        }
        if(!(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-]).*$/.test(password))){
          return toast('Password should have atleast one special character');    
         }

        // create new user 
        createNewUser(email, password)
            .then(result => {
              toast('User created successfully')
              setTimeout(() => {
                navigate("/")
                location.reload();
              }, 2000)
              updateNewUser(name, photo)
               .then(result => console.log(result))
               .catch(error => console.log(error.message));
            })
            .catch(error => {
              toast(error.message)
              console.log(error.message)
            })      
    }
  return (
    <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-[#1B9C85] to-green-400">
        <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-5">
        <h1 className="text-[#1B9C85] text-3xl font-bold text-center">Registration</h1>
          <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photourl"
              />
            </div>
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
              <button className="btn bg-opacity-0 border-[#1B9C85] hover:bg-opacity-0 hover:border-green-200">Sign up</button>
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-[#1B9C85] underline" to="/SignIn">Sign In</Link> here</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
