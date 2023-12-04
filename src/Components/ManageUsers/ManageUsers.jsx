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
        fetch(`http://localhost:3000/users`)
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);
    
      const handleUpdateRoleAdmin = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
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
        fetch(`http://localhost:3000/users/${id}`, {
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
        fetch(`http://localhost:3000/users/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ fraud: "yes" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              //update status
              const remaining = users.filter((job) => job._id !== id);
              const updated = users.find((job) => job._id === id);
              updated.fraud = "yes";
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
            fetch(`http://localhost:3000/users/${id}`, {
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
      <h1 className="text-center text-5xl font-bold mb-16 text-[#59CE8F]">
        Manage Users
      </h1>
      <div className="overflow-x-auto container mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#59CE8F] text-lg">User Name</th>
              <th className="text-[#59CE8F] text-lg">User Email</th>
              <th className="text-[#59CE8F] text-lg">Role</th>
              <th className="text-[#59CE8F] text-lg">Fraud</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id} className="border border-[#59CE8F]">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.fraud}</td>
                <td className="">
                  <div className=" w-max">
                  <button
                    onClick={()=>handleUpdateRoleAdmin(user._id)}
                    className={` underline hover:text-[#59CE8F]  mr-4 `}
                  >
                    Make Admin
                  </button>

                  <button
                    onClick={() => handleUpdateRoleAgent(user._id)}
                    className={`underline hover:text-[#59CE8F] mt-3 mr-4`}
                  >
                    Make agent
                  </button>
                  <button
                  onClick={() => {handleUpdateFraud(user._id)}}
                    className={`underline hover:text-[#59CE8F] mt-3 mr-4 ${user.role !== 'agent' && 'hidden'}`}
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
                </td>
              </tr>
            ))}
            {/*onClick={() => handleUpdateStatus(job._id)}    className={`hover:text-[#59CE8F] mt-3 ${(job.status === 'in progress') ? `block` : `hidden`}`} */}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageUsers;