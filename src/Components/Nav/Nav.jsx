import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
const Nav = ({ handleToggle }) => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <div className="flex gap-8">
        <NavLink className="text-lg font-semibold" to="/">
          Home
        </NavLink>

        <NavLink className="text-lg font-semibold" to="/addJob">
          Add Job
        </NavLink>
        <NavLink className="text-lg font-semibold" to="/myPostedJobs">
          My Posted Jobs
        </NavLink>
        <NavLink className="text-lg font-semibold" to="/myBids">
          My Bids
        </NavLink>
        <NavLink className="text-lg font-semibold" to="/bidRequests">
          Bid Requests
        </NavLink>

        {!user && (
          <NavLink className="text-lg font-semibold" to="/SignIn">
            Sign in
          </NavLink>
        )}
      </div>
    </>
  );

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="navbar container mx-auto w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-[#59CE8F]">N E E D</p>
          {/* <p className="text-lg text-[#59CE8F]">Next Wheels</p> */}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        
        {user && (
          <div className="flex flex-col md:flex-row gap-7 items-center justify-center">
            
            <div className="flex flex-col items-center">
            <img
              className="rounded-full border-2 border-[#59CE8F] h-10 w-10"
              src={user.photoURL}
              alt=""
            />
            <h1 className="text-[#59CE8F] text-xl font-semibold">
              {user.displayName}
            </h1>
            
            </div>
            <button
              onClick={handleSignOut}
              className="text-[#59CE8F]  bg-opacity-0 hover:text-white"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
