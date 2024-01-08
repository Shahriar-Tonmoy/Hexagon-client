import { Link } from "react-router-dom";

const ManageOneReview = ({rev,handleDelete}) => {
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
            <img className="h-20 w-20 rounded-full" src={userImage} alt="" />      
            <p className="text-[#EEEEEE]">{userEmail}</p>
            <p className="font-semibold text-[#EEEEEE]">Review - {review}</p>
            <div className="card-actions justify-start">
              <Link>
                <button
                  onClick={() =>{handleDelete(_id)}}
                  className={`btn bg-[#00ADB5] text-white hover:bg-[#393E46]`}
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

export default ManageOneReview;