import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageUsers = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://hexagon-server.vercel.app/users`)
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);
    
      const handleUpdateRoleAdmin = (id) => {
        fetch(`https://hexagon-server.vercel.app/users/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ role: "admin" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              //update status
              const remaining = users.filter((job) => job._id !== id);
              const updated = users.find((job) => job._id === id);
              updated.role = "admin";
              updated.fraud = null;
              const newBidJobs = [updated, ...remaining];
              setUsers(newBidJobs);
            }
          });
      };

      const handleUpdateRoleAgent = (id) => {
        fetch(`https://hexagon-server.vercel.app/users/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ role: "agent" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              //update status
              const remaining = users.filter((job) => job._id !== id);
              const updated = users.find((job) => job._id === id);
              updated.role = "agent";
              updated.fraud = null;
              const newBidJobs = [updated, ...remaining];
              setUsers(newBidJobs);
            }
          });
      };
      const handleUpdateFraud = (id) => {
        fetch(`https://hexagon-server.vercel.app/users/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ fraud: "Fraud" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              //update status
              const remaining = users.filter((job) => job._id !== id);
              const updated = users.find((job) => job._id === id);
              updated.fraud = "Fraud";
              updated.role = null;
              const newBidJobs = [updated, ...remaining];
              setUsers(newBidJobs);
            }
          });
      };

      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://hexagon-server.vercel.app/users/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                //console.log(data,data.deletedCount)
                if (data.deletedCount > 0) {
                  toast("DELETED SUCCESSFULLY");
                  const remainingProducts = users.filter((pro) => pro._id !== id);
                  setUsers(remainingProducts);
                }
              });
          }
        });
      };

    return (
        <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#00ADB5]">
        Manage Users
      </h1>
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#00ADB5] text-lg">User Name</th>
              <th className="text-[#00ADB5] text-lg">User Email</th>
              <th className="text-[#00ADB5] text-lg">Role</th>
              <th className="text-[#00ADB5] text-lg text-start">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id} className="border border-[#00ADB5]">
                <td className="text-[#EEEEEE]">{user.name}</td>
                <td className="text-[#EEEEEE]" >{user.email}</td>
                <td className="text-[#EEEEEE]">{user.role}</td>
                <td className="">
                    {
                        (user.fraud === 'Fraud') ? <p className="text-red-800">{user.fraud}</p> :
                        <div className=" w-max">
                  <button
                    onClick={()=>handleUpdateRoleAdmin(user._id)}
                    className={` underline hover:text-[#00ADB5] text-[#EEEEEE]  mr-4 `}
                  >
                    Make Admin
                  </button>

                  <button
                    onClick={() => handleUpdateRoleAgent(user._id)}
                    className={`underline hover:text-[#00ADB5] text-[#EEEEEE]  mt-3 mr-4`}
                  >
                    Make agent
                  </button>
                  <button
                  onClick={() => {handleUpdateFraud(user._id)}}
                    className={`underline hover:text-[#00ADB5] text-[#EEEEEE]  mt-3 mr-4 ${user.role !== 'agent' && 'hidden'}`}
                  >
                    Mark as fraud
                  </button>
                  <button
                  onClick={()=>handleDelete(user._id)}
                    className={`underline text-red-600 hover:text-red-400 mt-3 mr-4 `}
                  >
                    Delete
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

export default ManageUsers;