import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



const AddProperty = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;



  console.log(user.photoURL);


  const handleNewProduct = async (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const agentName = form.agentName.value;
    const agentEmail = form.agentEmail.value;
    const priceRange = form.priceRange.value;
    const image = form.image.value;
    const status = 'pending';
    const agentImage = user.photoURL;
    console.log(agentImage);
    const advertise = 'no';
    
    const newProperty = {
      title,
      location,
      agentName,
      agentEmail,
      priceRange,
      image,
      status,
      agentImage,
      advertise
    };
    form.reset();
    fetch("https://hexagon-server.vercel.app/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Property added successfully, wait for admin verification");
      });
  };
  return (
    <div >
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-[#222831]">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#00ADB5] bg-[#393E46] py-20 px-5">
            <h1 className="text-[#00ADB5] text-center text-3xl font-bold">
              Add new property
            </h1>
            <form className="card-body" onSubmit={handleNewProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Property title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Property title"
                    className="input input-bordered"
                    name="title"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Property location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Property location"
                    className="input input-bordered"
                    name="location"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered"
                    name="image"
                    required
                  />
                  {/* <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    // onChange={handleFileChange}
                  /> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Agent name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="Agent name"
                    className="input input-bordered"
                    name="agentName"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Agent email</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Agent email"
                    className="input input-bordered"
                    name="agentEmail"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#EEEEEE]">Price range(ex: 3000-5000)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Minimum price"
                    className="input input-bordered"
                    name="priceRange"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-opacity-0 border-[#00ADB5] text-[#EEEEEE] hover:bg-opacity-0 hover:border-[#00ADB5] w-[20%] mx-auto">
                Add property
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

export default AddProperty;
