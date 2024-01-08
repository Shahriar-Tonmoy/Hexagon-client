import { Link } from "react-router-dom";

const AdminDashboard = ({ currentUser }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-44">
      <Link className="flex items-center lg:justify-end justify-center col-span-1 h-full" to={`/profile/${currentUser._id}`}>
        <div className="card border-2 border-[#00ADB5] w-72 bg-[#393E46] shadow-xl image-full h-full">
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
        <Link className="flex items-center justify-center" to='/manageProperties'>
        <div className="card w-72 border-2 border-[#00ADB5] bg-[#393E46] shadow-xl image-full ">
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
        
        <Link className="flex items-center lg:justify-start justify-center " to={`/manageUsers`}>
        <div className="card w-72 border-2 border-[#00ADB5] bg-[#393E46] h-full shadow-xl image-full ">
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
        </Link>
        
        
        <Link className="flex items-center lg:justify-end justify-center" to={`/manageReview`}>
        <div className="card w-72 border-2 border-[#00ADB5] bg-[#393E46] shadow-xl h-full image-full ">
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
        </Link>
        <Link className="flex items-center justify-center" to={`/advertiseProperties`}>
        <div className="card w-72 border-2 border-[#00ADB5] bg-[#393E46] shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/r7bJS9r/pngwing-com-11.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              Advertise Properties
            </h2>
            <p></p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
