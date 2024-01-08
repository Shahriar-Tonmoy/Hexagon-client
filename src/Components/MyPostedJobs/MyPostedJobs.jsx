import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import Job from "../Job/Job";
import MyPostedJob from "../MyPostedJob/MyPostedJob";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    document.title = "N E E D | My Posted Jobs";
  }, []);

  useEffect(() => {
    fetch(`https://need-server.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyJobs(data));
  }, []);

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
        fetch(`https://need-server.vercel.app/jobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data,data.deletedCount)
            if (data.deletedCount > 0) {
              toast("DELETED SUCCESSFULLY");
              const remainingProducts = myJobs.filter((pro) => pro._id !== id);
              setMyJobs(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      <ToastContainer></ToastContainer>
      <h1 className="text-center text-5xl font-bold mb-16 text-[#00ADB5]">
        My Posted Jobs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto mt-10">
        {myJobs.map((job) => (
          <MyPostedJob
            key={job._id}
            job={job}
            handleDelete={handleDelete}
          ></MyPostedJob>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
