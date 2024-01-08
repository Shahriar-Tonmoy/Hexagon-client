import React from 'react';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const MakeOffer = () => {
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

    const propertyId = _id;
    const propertyImage = image;
    const AgentEmail = agentEmail;

    const handleNewOffer = async (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const Title = form.title.value;
        const Location = form.location.value;
        const AgentName = form.agentName.value;
        const OfferedAmount = form.offeredAmount.value;
        const BuyerEmail = form.buyerEmail.value;
        const BuyerName = form.buyerName.value;
        const BuyingDate = form.buyingDate.value;
        const Status = 'pending';
        console.log(agentImage);
        
        const newOffer = {
            Title,
            Location,
            AgentName,
            AgentEmail,
            OfferedAmount,
            BuyerEmail,
            BuyerName,
            propertyId,
            Status,
            BuyingDate,
            propertyImage

        };
        form.reset();
        const regex = /(\d+)-(\d+)/;
        const match = priceRange.match(regex);
        const firstNumber = parseInt(match[1], 10);
        const secondNumber = parseInt(match[2], 10);
        console.log("First Number:", firstNumber);
        console.log("Second Number:", secondNumber);

        if(OfferedAmount<firstNumber || OfferedAmount>secondNumber){
            toast("Your Offered amount is not in range");
            return;
        }

        
        fetch("https://hexagon-server.vercel.app/offers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newOffer),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast("Offer sent to agent successfully, wait for the confirmation.");
          });
      };

 
    return (
        <div>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#00ADB5] bg-[#393E46] py-20 px-5">
            <h1 className="text-[#00ADB5] text-center text-3xl font-bold">
              Make Your Offer
            </h1>
            <form className="card-body" onSubmit={handleNewOffer}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Property title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Property title"
                    defaultValue={title}
                    className="input input-bordered"
                    name="title"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Property location</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={location}
                    placeholder="Property location"
                    className="input input-bordered"
                    name="location"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Agent name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={agentName}
                    placeholder="Agent name"
                    className="input input-bordered"
                    name="agentName"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Offered Amount (ex: 50000)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Offered Amount"
                    className="input input-bordered"
                    name="offeredAmount"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Buyer Email</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Buyer email"
                    className="input input-bordered"
                    name="buyerEmail"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Buyer Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="Buyer email"
                    className="input input-bordered"
                    name="buyerName"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Buying Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Minimum price"
                    className="input input-bordered"
                    name="buyingDate"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-opacity-0 text-[#EEEEEE] border-[#00ADB5] hover:bg-opacity-0 hover:border-[#00ADB5] w-[20%] mx-auto">
                Offer
                </button>
              </div>
            </form>
            <div className="text-center">
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MakeOffer;