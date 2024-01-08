import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
    <div className="mx-auto">
      <div className="card w-96 bg-[#393E46] shadow-xl border border-[#00ADB5] flex flex-col h-full pb-5">
        <figure className="px-10 pt-10">
          <img
            src={imageURL}
            alt="Shoes"
            className="rounded-xl h-40 md:w-full mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#00ADB5]">{title}</h2>
          <p>{description}</p>
          <div className="flex justify-between w-full">
            <p className="text-[#00ADB5]">Dead line: {deadline}</p>
            <p className="text-[#00ADB5]">
              {minimumPrice}-{maximumPrice}
            </p>
          </div>
        </div>
        <Link to={`/details/${_id}`}>
          <div className="card-actions ">
            <button className="btn border border-[#00ADB5] hover:bg-[#00ADB5] text-white mx-auto">
              Bid now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Job;
