import { Link } from "react-router-dom";

const BoughtProperty = ({property}) => {
    const {
        _id,
        Title,
        Location,
        AgentName,
        OfferedAmount,
        BuyerEmail,
        BuyerName,
        Status,
        BuyingDate,
        propertyId,
        propertyImage
      } = property;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-green-200 h-full">
        <figure className="w-1/2">
          <img src={propertyImage} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#1B9C85]">{Title}</h2>
          <p>{Location}</p>
          <p className="font-semibold">Agent - {AgentName}</p>
          <p className="font-semibold">Status - {Status}</p>
          <p className="font-semibold">
          Offered Amount - <span className="text-[#1B9C85]">{OfferedAmount}</span>
          </p>
          <div className="card-actions justify-start">
            <Link to={`/update/${_id}`}>
              <button
                className={`btn bg-[#1B9C85] text-white hover:bg-green-500 ${
                  Status === "pending" ? "hidden" : "block"
                }`}
              >
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoughtProperty;
