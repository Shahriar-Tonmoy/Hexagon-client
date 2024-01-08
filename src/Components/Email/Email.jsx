const Email = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#EEEEEE]">Contact us</h1>
          <div className="flex items-center gap-2">
            <p className="py-6 font-semibold text-[#00ADB5]">Phone:</p>
            <p className="font-medium text-[#EEEEEE]">019245xxxxx</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="py-6 font-semibold text-[#00ADB5]">Email:</p>
            <p className="font-medium text-[#EEEEEE]">example@gmail.com</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#393E46] border-2 border-[#00ADB5]">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#EEEEEE]">Write your message here</span>
              </label>
              <textarea
                type="email"
                placeholder="Message"
                className="input input-bordered h-44"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#00ADB5] text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
