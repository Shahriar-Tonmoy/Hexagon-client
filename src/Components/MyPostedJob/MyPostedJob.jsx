import { Link } from "react-router-dom";

const MyPostedJob = ({ job, handleDelete }) => {
  const {
    _id,
    email,
    title,
    deadline,
    description,
    minimumPrice,
    maximumPrice,
    imageURL,
  } = job;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl flex flex-col h-full">
        <figure>
          <img src={imageURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#59CE8F]">{title}</h2>
          <p>{description}</p>
          <div className=" justify-center">
            <Link to={`/update/${_id}`}>
              <button className="btn border border-[#59CE8F] hover:bg-[#59CE8F] text-white mx-auto mr-4">
                Update
              </button>
            </Link>
            
            <button onClick={()=>handleDelete(_id)} className="btn border border-[#59CE8F] hover:bg-[#59CE8F] text-white mx-auto">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJob;
