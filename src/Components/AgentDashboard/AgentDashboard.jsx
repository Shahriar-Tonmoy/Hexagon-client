import { Link } from "react-router-dom";

const AgentDashboard = ({ currentUser }) => {
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
        {
            !currentUser.fraud &&
            <Link to={`/addProperty`}>
            <div className="card w-72 bg-base-100 shadow-xl image-full ">
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

        <Link to='/myAddedProperties'> 
        <div className="card w-72 bg-base-100 shadow-xl image-full ">
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

        
        <div className="card w-72 bg-base-100 shadow-xl image-full ">
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
        <Link to={`/requestedProperties`}>
        <div className="card w-72 bg-base-100 shadow-xl image-full ">
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
