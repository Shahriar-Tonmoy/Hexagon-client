import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const Details = () => {
  useEffect(() => {
    document.title = 'N E E D | Job Details'; 
  }, []);
  const navigate = useNavigate();
  const allJobs = useLoaderData();
  const { user, signOutUser } = useContext(AuthContext);
  const { id } = useParams();
  const selectedJob = allJobs.find((job) => job._id == id);

  const { _id, ...newSelectedPro } = selectedJob;
  const {
    email,
    title,
    deadline,
    description,
    category,
    minimumPrice,
    maximumPrice,
    imageURL,
  } = selectedJob;

  const status = 'pending';

  const handleBidJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const buyerEmail = form.buyerEmail.value;
    const newBidJob = {
      title,
      price,
      deadline,
      email,
      buyerEmail,
      status,
    };
    fetch(
      "https://need-server.vercel.app/bidJobs",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBidJob),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast("You've bid for this project successfully!!");
          setTimeout(() => {
            navigate("/myBids")
          }, 2000)
        }
      });
  };

  const deadlineDate = new Date(deadline);
  const Time = deadlineDate.getTime();
  console.log(Time);
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#59CE8F]">{title}</h1>
            <p className="py-6">
              {description}
            </p>
            <p className="text-[#59CE8F] text-xl">Deadline: {deadline}</p>
            <p className="text-[#59CE8F] text-xl">{minimumPrice} - {maximumPrice}</p>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[#59CE8F]">
            <h1 className="text-[#59CE8F] text-5xl font-extrabold text-center mt-8">Place Your Bid</h1>
            <form className="card-body" onSubmit={handleBidJob}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
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
                  defaultValue={deadline}
                  name='deadline'
                  required
                  readOnly
                />
              </div>
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
                  <span className="label-text">Buyer Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={email}
                  placeholder=""
                  className="input input-bordered"
                  name="buyerEmail"
                  readOnly                
                />
              </div>
              <div className="form-control mt-6">
                <button className={`btn border-[#59CE8F] text-white hover:bg-[#59CE8F]`} disabled={(user.email === email || Date.now() >= Time) ? true : false} >Bid on this project</button>
                {/*  */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
