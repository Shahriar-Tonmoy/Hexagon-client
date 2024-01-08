import { Link } from "react-router-dom";

const UserDashboard = ({ currentUser }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-44">
        <Link className="flex items-center lg:justify-end justify-center col-span-1 h-full" to={`/profile/${currentUser._id}`}>
          <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl image-full h-full">
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
        <Link className="flex items-center justify-center col-span-1 h-full" to='/wishlist'>
          <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl h-full image-full ">
            <figure className="rounded">
              <img
                src="https://i.ibb.co/9qV7ys8/pngwing-com-5.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body rounded-full">
              <h2 className="card-title text-4xl font-extrabold text-white">
                Wishlist
              </h2>
              <p></p>
            </div>
          </div>
        </Link>


        <Link className="flex items-center lg:justify-start justify-center col-span-1 h-full" to={`/broughtProperties`}>
        <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/3m7ttFq/pngwing-com-1.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              Property bought
            </h2>
            <p></p>
          </div>
        </div>

        </Link>
        
        <Link className="flex items-center lg:justify-end justify-center col-span-1 h-full" to={`/myReviews`}>
        <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/r50bnYg/pngwing-com-4.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              My reviews
            </h2>
            <p></p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
