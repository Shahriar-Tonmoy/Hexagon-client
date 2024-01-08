import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const AdvertiseProperties = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`https://hexagon-server.vercel.app/properties`)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const verifiedProperties = properties.filter(
    (property) => property.status === "verified"
  );

  const handleUpdateAdvertiseNo = (id) => {
    fetch(`https://hexagon-server.vercel.app/properties/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: "no" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update status
          const remaining = properties.filter((job) => job._id !== id);
          const updated = properties.find((job) => job._id === id);
          updated.advertise = "no";
          const newBidJobs = [updated, ...remaining];
          setProperties(newBidJobs);
        }
      });
  };
  const handleUpdateAdvertiseYes = (id) => {
    fetch(`https://hexagon-server.vercel.app/properties/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: "yes" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update status
          const remaining = properties.filter((job) => job._id !== id);
          const updated = properties.find((job) => job._id === id);
          updated.advertise = "yes";
          const newBidJobs = [updated, ...remaining];
          setProperties(newBidJobs);
        }
      });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#00ADB5]">
        Advertise Properties
      </h1>
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#00ADB5] text-lg">Image</th>
              <th className="text-[#00ADB5] text-lg">Title</th>
              <th className="text-[#00ADB5] text-lg">Price Range</th>
              <th className="text-[#00ADB5] text-lg">Agent Name</th>
              <th className="text-[#00ADB5] text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {verifiedProperties.map((property) => (
              <tr key={property._id} className="border border-[#00ADB5]">
                <td>
                  <img className="h-20 w-20" src={property.image} alt="" />
                </td>
                <td className="text-[#EEEEEE]">{property.title}</td>
                <td className="text-[#EEEEEE]">{property.priceRange}</td>
                <td className="text-[#EEEEEE]">{property.agentName}</td>
                <td className="">
                  {
                    <div>
                      <button
                        onClick={() => {
                            handleUpdateAdvertiseYes(property._id);
                        }}
                        className={` underline hover:text-[#00ADB5] text-[#EEEEEE]  mr-4 ${property.advertise === 'yes' ? 'hidden' : 'block'}`}
                      >
                        Advertise
                      </button>

                      <button
                        onClick={() => {
                            handleUpdateAdvertiseNo(property._id);
                        }}
                        className={`underline hover:text-[#00ADB5] text-[#EEEEEE] mt-3 ${property.advertise === 'no' ? 'hidden' : 'block'}`}
                      >
                        Remove Advertise
                      </button>
                    </div>
                  }
                </td>
              </tr>
            ))}
            {/*onClick={() => handleUpdateStatus(job._id)}    className={`hover:text-[#00ADB5] mt-3 ${(job.status === 'in progress') ? `block` : `hidden`}`} */}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertiseProperties;
