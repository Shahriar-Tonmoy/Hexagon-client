import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const Update = () => {

    const loadedProperty = useLoaderData();
    const { user, signOutUser } = useContext(AuthContext);
    const {
      _id,
      title,
      location,
      agentName,
      agentEmail,
      priceRange,
      image,
      status,
      agentImage
    } = loadedProperty;

    const handleUpdateProperty = e =>{
        e.preventDefault();
        const form  = e.target;
        const fImage = form.image.value;
        const fPropertyTitle = form.title.value;
        const fLocation = form.location.value;
        const fAgentName = form.agentName.value;
        const fAgentEmail = form.agentEmail.value;
        const fPriceRange = form.priceRange.value;
        const updatedProperty = {fImage, fPropertyTitle, fLocation, fAgentName, fAgentEmail, fPriceRange};
        
        fetch(`https://hexagon-server.vercel.app/properties/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedProperty)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast('Updated Successfully!!')
                }
            })
        
    }

  return (
    <div className="hero min-h-screen bg-base-200">
        <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#1B9C85] bg-base-100 py-20 px-5">
          <h1 className="text-[#1B9C85] text-center text-3xl font-bold">
            Update Your Added Property
          </h1>
          <form className="card-body" onSubmit={handleUpdateProperty} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  defaultValue={image}
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered"
                  name="title"
                  defaultValue={title}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Property Location"
                  className="input input-bordered"
                  name="location"
                  defaultValue={location}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Agent name"
                  className="input input-bordered"
                  name="agentName"
                  defaultValue={agentName}
                  required
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Agent email"
                  className="input input-bordered"
                  name="agentEmail"
                  defaultValue={agentEmail}
                  required
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Range</span>
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered"
                  name="priceRange"
                  defaultValue={priceRange}
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button  className="btn bg-opacity-0 border-[#1B9C85] hover:bg-opacity-0 hover:border-green-400 w-[30%] mx-auto">
                Update
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
  );
};

export default Update;
