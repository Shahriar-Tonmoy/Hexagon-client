const SingleCart = ({ product, handleDelete }) => {
    const { _id, name, image, brandName, type, price, shortDescription, rating } = product;

  return (
    <div className="card card-side bg-[#393E46] shadow-xl border-2 border-[#00ADB5]">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#00ADB5] font-semibold">{name}</h2>
        <p className="font-extrabold">{brandName}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleDelete(_id)} className="btn bg-[#00ADB5] text-white hover:bg-[#00ADB5]">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
