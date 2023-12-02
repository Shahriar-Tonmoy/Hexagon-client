const SingleCart = ({ product, handleDelete }) => {
    const { _id, name, image, brandName, type, price, shortDescription, rating } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 border-[#59CE8F]">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#59CE8F] font-semibold">{name}</h2>
        <p className="font-extrabold">{brandName}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleDelete(_id)} className="btn bg-[#59CE8F] text-white hover:bg-[#59CE8F]">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
