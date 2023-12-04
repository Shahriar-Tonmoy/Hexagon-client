import { Link } from "react-router-dom";

const MyReview = ({rev,handleDelete}) => {
    const {
        _id,
        review,
        propertyId,
        userEmail,
        userImage,
        reviewTime,
        propertyTitle,
        propertyAgentName,
      } = rev;
    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-green-200 h-full">
          <div className="card-body">
            <h2 className="card-title text-[#1B9C85]">{propertyTitle}</h2>
            <p>{Location}</p>
            <p className="font-semibold">Agent - {propertyAgentName}</p>
            <p className="font-semibold">time - {reviewTime}</p>
            <p className="font-semibold">Review - {review}</p>
            <div className="card-actions justify-start">
              <Link>
                <button
                  onClick={() =>{handleDelete(_id)}}
                  className={`btn bg-[#1B9C85] text-white hover:bg-green-500`}
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyReview;