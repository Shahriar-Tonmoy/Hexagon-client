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
      <div className="card lg:card-side bg-[#393E46] shadow-xl border-2 border-[#00ADB5] h-full">
        <figure className="w-1/2">
          <img src={propertyImage} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#00ADB5]">{Title}</h2>
          <p className="text-[#EEEEEE]">{Location}</p>
          <p className="font-semibold text-[#EEEEEE]">Agent - {AgentName}</p>
          <p className="font-semibold text-[#EEEEEE]">Status - {Status}</p>
          <p className="font-semibold text-[#EEEEEE]">
          Offered Amount - <span className="text-[#00ADB5]">{OfferedAmount}</span>
          </p>
          <div className="card-actions justify-start">
            <Link to={`/payment`}>
              <button
                className={`btn bg-[#00ADB5] text-white hover:bg-green-500 ${
                  (Status === "pending" || Status === "rejected") ? "hidden" : "block"
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
