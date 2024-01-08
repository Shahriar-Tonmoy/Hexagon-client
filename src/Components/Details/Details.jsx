import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import Review from "../Review/Review";

const Details = () => {
  const navigate = useNavigate();
  const allProperties = useLoaderData();
  const { user, signOutUser } = useContext(AuthContext);
  const { id } = useParams();
  const selectedProperty = allProperties.find((property) => property._id == id);

  // const { _id, ...newSelectedPro } = selectedJob;
  const {
    _id,
    title,
    location,
    agentName,
    agentEmail,
    priceRange,
    image,
    status,
    agentImage,
  } = selectedProperty;

  const userEmail = user?.email;
  const userImage = user?.photoURL;
  console.log(userEmail);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch(`https://hexagon-server.vercel.app/reviews?propertyId=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const propertyId = _id;
  const propertyTitle = title;
  const propertyAgentName = agentName;

  const handleReview = (e) => {
    e.preventDefault();
    function getCurrentTime() {
      const now = new Date();
    

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const formattedTime = `${(hours)}:${(minutes)}`;
    
      return formattedTime;
    }
    const review = e.target.review.value;
    console.log(review);
    e.target.reset();
    const reviewTime = getCurrentTime();
    console.log(reviewTime);
    

    const newReview = {
      review,
      propertyId,
      userEmail,
      userImage,
      reviewTime,
      propertyTitle,
      propertyAgentName
    };
    fetch("https://hexagon-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast("Review successfully added!!");
          // const remainingProducts = myProperties.filter((pro) => pro._id !== id);
          const newReviews = [...reviews, newReview ]
          setReviews(newReviews);
          
        }
      });
  };

  const handleWishList = () => {
    const newWishList = {
      title,
      location,
      agentName,
      agentEmail,
      priceRange,
      image,
      status,
      agentImage,
      userEmail,
      propertyId
    };
    fetch("https://hexagon-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWishList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast("Property is added to your wishlist!!");
        }
      });
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="hero mb-10 min-h-screen bg-[#222831]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-[#00ADB5]">{title}</h1>
            <p className="py-6 text-[#EEEEEE]">
              <span className="text-[#00ADB5]   text-xl font-bold">
                Price Range-
              </span>{" "}
              {priceRange}
            </p>
            <p className="py-6 text-[#EEEEEE]">Agent - {agentName}</p>
            <button
              onClick={handleWishList}
              className="btn bg-[#00ADB5] text-white hover:bg-green-500 mr-3"
            >
              Add To Wishlist
            </button>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn bg-[#00ADB5] text-white hover:bg-green-500"
            >
              Review
            </button>
            <h1 className="text-xl font-bold text-[#00ADB5] mb-10 mt-40">
                Reviews
              </h1>
              <div className="grid grid-cols-3">
              {reviews?.map((review) => (
                <Review key={review?._id} review={review}></Review>
              ))}
              </div>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-[#00ADB5]">
                  Write your review
                </h3>
                <form action="" onSubmit={handleReview}>
                  <div className="flex flex-col">
                    <textarea
                      name="review"
                      className="textarea textarea-info"
                      placeholder="Bio"
                    ></textarea>
                    <button className="btn bg-[#00ADB5] text-white hover:bg-green-500 w-24">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div className="container  mx-auto">
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Details;
