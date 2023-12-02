const Email = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact us</h1>
          <div className="flex items-center gap-2">
            <p className="py-6 font-semibold text-[#1B9C85]">Phone:</p>
            <p className="font-medium">019245xxxxx</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="py-6 font-semibold text-[#1B9C85]">Email:</p>
            <p className="font-medium">example@gmail.com</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-[#1B9C85]">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Write your message here</span>
              </label>
              <textarea
                type="email"
                placeholder="Message"
                className="input input-bordered h-44"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1B9C85] text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
