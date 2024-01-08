import { Link } from "react-router-dom";

const AgentDashboard = ({ currentUser }) => {
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
        {
            !currentUser.fraud &&
            <Link className="flex items-center justify-center col-span-1 h-full" to={`/addProperty`}>
            <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl image-full ">
            <figure className="rounded">
              <img
                src="https://i.ibb.co/3m7ttFq/pngwing-com-1.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body rounded-full">
              <h2 className="card-title text-4xl font-extrabold text-white">
                Add Property
              </h2>
              <p>Add new property</p>
            </div>
          </div>
          
        </Link>
        }

        <Link className="flex items-center lg:justify-start justify-center col-span-1 h-full" to='/myAddedProperties'> 
        <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/3m7ttFq/pngwing-com-1.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              My added properties
            </h2>
            <p>See your added properties</p>
          </div>
        </div>
        </Link>

        
        <Link className="flex items-center lg:justify-end justify-center col-span-1 h-full">
        <div className="border-2 border-[#00ADB5] card w-72 bg-[#393E46] shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/3m7ttFq/pngwing-com-1.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              My sold properties
            </h2>
            <p>See your sold properties</p>
          </div>
        </div>
        </Link>
        <Link className="flex items-center justify-center col-span-1 h-full" to={`/requestedProperties`}>
        <div className="border-2 border-[#00ADB5] card w-72 h-full bg-[#393E46] shadow-xl image-full ">
          <figure className="rounded">
            <img src="https://i.ibb.co/SVbpnYV/pngwing-com-2.png" alt="Shoes" />
          </figure>
          <div className="card-body rounded-full">
            <h2 className="card-title text-4xl font-extrabold text-white">
              Requested properties
            </h2>
            <p>See Requested properties</p>
          </div>
        </div>
        </Link>

        
      </div>
    </div>
  );
};

export default AgentDashboard;
