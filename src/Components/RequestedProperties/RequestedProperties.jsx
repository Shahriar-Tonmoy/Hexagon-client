import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const RequestedProperties = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`https://hexagon-server.vercel.app/offers?AgentEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleUpdateStatusRejected = (id) => {
    fetch(`https://hexagon-server.vercel.app/offers/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Status: "rejected" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update status
          const remaining = properties.filter((job) => job._id !== id);
          const updated = properties.find((job) => job._id === id);
          updated.Status = "rejected";
          const newBidJobs = [updated, ...remaining];
          setProperties(newBidJobs);
        }
      });
  };
  const handleUpdateStatusAccepted = (id) => {
    fetch(`https://hexagon-server.vercel.app/offers/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Status: "accepted" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update status
          const remaining = properties.filter((job) => job._id !== id);
          const updated = properties.find((job) => job._id === id);
          updated.Status = "accepted";
          const newBidJobs = [updated, ...remaining];
          setProperties(newBidJobs);
        }
      });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#00ADB5]">
        Requested properties
      </h1>
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#00ADB5] text-lg">Title</th>
              <th className="text-[#00ADB5] text-lg">Location.</th>
              <th className="text-[#00ADB5] text-lg">Buyer name</th>
              <th className="text-[#00ADB5] text-lg">Buyer email</th>
              <th className="text-[#00ADB5] text-lg">Offered Price</th>
              <th className="text-[#00ADB5] text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {properties.map((property) => (
              <tr key={property._id} className="border border-[#00ADB5]">
                <td className="text-[#EEEEEE]">{property.Title}</td>
                <td className="text-[#EEEEEE]">{property.Location}</td>
                <td className="text-[#EEEEEE]">{property.BuyerName}</td>
                <td className="text-[#EEEEEE]">{property.BuyerEmail}</td>
                <td className="text-[#EEEEEE]">{property.OfferedAmount}</td>
                <td className="">
                    {
                        (property.Status !== 'pending') ? <p className="text-[#EEEEEE]">{property.Status}</p> :
                        <div>
                  <button
                    onClick={()=>{handleUpdateStatusAccepted(property._id)}}
                    className={` underline hover:text-[#00ADB5]  mr-4 ${
                      property.status === "verified" ||
                      property.status === "rejected"
                        ? `hidden`
                        : `block`
                    }`}
                  >
                    Accept
                  </button>

                  <button
                  onClick={()=>{handleUpdateStatusRejected(property._id)}}
                    className={`underline hover:text-[#00ADB5] mt-3  ${
                      property.status === "verified" ||
                      property.status === "rejected"
                        ? `hidden`
                        : `block`
                    }`}
                  >
                    Reject
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

export default RequestedProperties;
