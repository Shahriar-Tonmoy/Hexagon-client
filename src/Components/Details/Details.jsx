import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

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
  console.log(userEmail);

  const handleReview = (e) =>{
    e.preventDefault();
    const review = e.target.review.value;
    console.log(review);
    e.target.reset();
    const propertyId = _id;

    const newReview = {
      review,
      propertyId,
      userEmail
    };
    fetch("http://localhost:3000/reviews", {
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
        }
      });

  }

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
    };
    fetch("http://localhost:3000/wishlist", {
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-[#1B9C85]">{title}</h1>
            <p className="py-6">
              <span className="text-[#1B9C85] text-xl font-bold">
                Price Range-
              </span>{" "}
              {priceRange}
            </p>
            <p className="py-6">Agent - {agentName}</p>
            <button
              onClick={handleWishList}
              className="btn bg-[#1B9C85] text-white hover:bg-green-500"
            >
              Add To Wishlist
            </button>
            <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="btn bg-[#1B9C85] text-white hover:bg-green-500">
              Review
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-[#1B9C85]">Write your review</h3>
                <form action="" onSubmit={handleReview}>
                  <div className="flex flex-col">
                  <textarea name="review" className="textarea textarea-info" placeholder="Bio"></textarea>
                  <button className="btn bg-[#1B9C85] text-white hover:bg-green-500 w-24">
                   Submit
                  </button>
                  </div>
                </form>
                
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
