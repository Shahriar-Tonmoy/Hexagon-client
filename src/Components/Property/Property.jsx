import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Property = ({property}) => {
    const [users, setUsers] = useState([]);
    const {
        _id,
        title,
        location,
        agentName,
        agentEmail,
        priceRange,
        image,
        status,
        agentImage
      } = property;

      useEffect(() => {
        fetch(`https://hexagon-server.vercel.app/users`)
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);

      const currentUser = users.find(user => user.name === agentName);

    return (
        <div>
        {
            !currentUser?.fraud && <div className="card lg:card-side bg-[#393E46] shadow-xl border-2 border-[#00ADB5] h-full">
            <figure className="w-1/2">
              <img  
                src={image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#00ADB5]">{title}</h2>
              <p className="text-[#EEEEEE]">{location}</p>
              <p className="text-[#EEEEEE] font-semibold">Agent - {agentName}</p>
              <img src={agentImage} alt="" className="h-14 w-14 rounded-full" />
              <p className="font-semibold text-[#EEEEEE]">Verification Status - {status}</p>
              <p className="font-semibold text-[#EEEEEE]">Price range - <span className="text-[#00ADB5]">{priceRange}</span></p>
              <div className="card-actions justify-start">
                <Link to={`/details/${_id}`}><button className="btn bg-[#00ADB5] text-[#EEEEEE] hover:bg-green-500">Details</button></Link>
                
              </div>
            </div>
          </div>
        }
      
    </div>
    );
};

export default Property;