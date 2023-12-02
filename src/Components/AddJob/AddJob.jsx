import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  useEffect(() => {
    document.title = 'N E E D | Add Jobs'; 
  }, []);

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user)
  const handleNewProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const title = form.jobTitle.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const category = form.category.value;
    const minimumPrice = form.minimumPrice.value;
    const maximumPrice = form.maximumPrice.value;
    const imageURL = form.imageURL.value;
    const newJob = {
      email,
      title,
      deadline,
      description,
      category,
      minimumPrice,
      maximumPrice,
      imageURL
    };
    console.log(newJob);
    form.reset();
    fetch(
      "https://need-server.vercel.app/jobs",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newJob),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Job Posted successfully");
        setTimeout(() => {
          navigate("/myPostedJobs")
        }, 2000)
      });

  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#1B9C85] bg-base-100 py-20 px-5">
          <h1 className="text-[#1B9C85] text-center text-3xl font-bold">
            Post a Job
          </h1>
          <form className="card-body" onSubmit={handleNewProduct}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
                  placeholder=""
                  className="input input-bordered"
                  name="email"
                  readOnly                
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job title</span>
                </label>
                <input
                  type="text"
                  placeholder="Job title"
                  className="input input-bordered"
                  name="jobTitle"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  name="deadline"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  name="description"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select name="category" id="cars" className="input input-bordered">
                  <option value="Web development">Web development</option>
                  <option value="Digital marketing">Digital marketing</option>
                  <option value="Graphics design">Graphics design</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum price</span>
                </label>
                <input
                  type="text"
                  placeholder="Minimum price"
                  className="input input-bordered"
                  name="minimumPrice"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Maximum price</span>
                </label>
                <input
                  type="text"
                  placeholder="Maximum price"
                  className="input input-bordered"
                  name="maximumPrice"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  name="imageURL"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-opacity-0 border-[#1B9C85] hover:bg-opacity-0 hover:border-orange-200 w-[20%] mx-auto">
                Post
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

export default AddJob;
