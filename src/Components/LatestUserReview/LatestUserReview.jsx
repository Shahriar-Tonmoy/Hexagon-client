
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import MyReview from "../MyReview/MyReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import ManageOneReview from "../ManageOneReview/ManageOneReview";
import LatestUserOneReview from "../LatestUserOneReview/LatestUserOneReview";

const LatestUserReview = () => {
    const [reviews, setReviews] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);
    

    useEffect(() => {
        fetch(`https://hexagon-server.vercel.app/reviews`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
      }, []);
    
      const sliceReviews = reviews.slice(reviews.length-3, reviews.length);

  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#00ADB5]">
        Latest Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 container mx-auto mt-10 mb-16">
        {sliceReviews.map((rev) => (
          <LatestUserOneReview
            key={rev._id}
            rev={rev}
          ></LatestUserOneReview>
        ))}
      </div>
    </div>
  );
};

export default LatestUserReview;
