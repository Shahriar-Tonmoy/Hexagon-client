import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import MyReview from "../MyReview/MyReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import ManageOneReview from "../ManageOneReview/ManageOneReview";

const ManageReview = () => {
    const [reviews, setReviews] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);
    

    useEffect(() => {
        fetch(`https://hexagon-server.vercel.app/reviews`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
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
            fetch(`https://hexagon-server.vercel.app/reviews/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                //console.log(data,data.deletedCount)
                if (data.deletedCount > 0) {
                  toast("DELETED SUCCESSFULLY");
                  const remainingProducts = reviews.filter((pro) => pro._id !== id);
                  setReviews(remainingProducts);
                }
              });
          }
        });
      };
  return (
    <div className="min-h-screen">
      <ToastContainer></ToastContainer>
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#00ADB5]">
        Manage Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 container mx-auto mt-10 mb-16">
        {reviews.map((rev) => (
          <ManageOneReview
            key={rev._id}
            rev={rev}
            handleDelete={handleDelete}
          ></ManageOneReview>
        ))}
      </div>
    </div>
  );
};

export default ManageReview;
