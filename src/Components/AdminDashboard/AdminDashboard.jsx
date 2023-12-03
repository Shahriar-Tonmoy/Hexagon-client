import { Link } from "react-router-dom";

const AdminDashboard = ({ currentUser }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-44">
      <Link to={`/profile/${currentUser._id}`}>
        <div className="card w-72 bg-base-100 shadow-xl image-full h-full">
          <figure className="rounded">
            <img src="https://i.ibb.co/jLKhF2r/pngwing-com.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-5xl font-extrabold text-white">
              Profile
            </h2>
            <p>{currentUser?.name}</p>
          </div>
        </div>
        </Link>
        <Link to='/manageProperties'>
        <div className="card w-72 bg-base-100 shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/3m7ttFq/pngwing-com-1.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              Manage Properties
            </h2>
            <p></p>
          </div>
        </div>
        </Link>

        
        <div className="card w-72 bg-base-100 shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/r0STVCj/pngwing-com-3.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              Manage Users
            </h2>
            <p></p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/r50bnYg/pngwing-com-4.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              Manage reviews
            </h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
