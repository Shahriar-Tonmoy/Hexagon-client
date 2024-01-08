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
        <div className="card lg:card-side bg-[#393E46] shadow-xl border-2 border-[#00ADB5] h-full">
          <div className="card-body">
            <h2 className="card-title text-[#00ADB5]">{propertyTitle}</h2>
            <p className="text-[#EEEEEE]">{Location}</p>
            <p className="font-semibold text-[#EEEEEE]">Agent - {propertyAgentName}</p>
            <p className="font-semibold text-[#EEEEEE]">time - {reviewTime}</p>
            <p className="font-semibold text-[#EEEEEE]">Review - {review}</p>
            <div className="card-actions justify-start">
              <Link>
                <button
                  onClick={() =>{handleDelete(_id)}}
                  className={`btn bg-[#00ADB5] text-white hover:bg-green-500`}
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