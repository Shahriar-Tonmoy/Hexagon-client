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
        <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-green-200 h-full">
          <div className="card-body">
          <h2 className="card-title text-[#1B9C85]">{propertyTitle}</h2>
            <img className="h-20 w-20 rounded-full" src={userImage} alt="" />
            
            <p>{userEmail}</p>
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

export default ManageOneReview;