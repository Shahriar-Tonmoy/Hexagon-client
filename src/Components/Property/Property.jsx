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
        fetch(`http://localhost:3000/users`)
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);

      const currentUser = users.find(user => user.name === agentName);

    return (
        <div>
        {
            !currentUser?.fraud && <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-green-200 h-full">
            <figure className="w-1/2">
              <img  
                src={image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#1B9C85]">{title}</h2>
              <p>{location}</p>
              <p className="font-semibold">Agent - {agentName}</p>
              <img src={agentImage} alt="" className="h-14 w-14 rounded-full" />
              <p className="font-semibold">Verification Status - {status}</p>
              <p className="font-semibold">Price range - <span className="text-[#1B9C85]">{priceRange}</span></p>
              <div className="card-actions justify-start">
                <Link to={`/details/${_id}`}><button className="btn bg-[#1B9C85] text-white hover:bg-green-500">Details</button></Link>
                
              </div>
            </div>
          </div>
        }
      
    </div>
    );
};

export default Property;