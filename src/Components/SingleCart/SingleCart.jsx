const SingleCart = ({ product, handleDelete }) => {
    const { _id, name, image, brandName, type, price, shortDescription, rating } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 border-[#1B9C85]">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#1B9C85] font-semibold">{name}</h2>
        <p className="font-extrabold">{brandName}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleDelete(_id)} className="btn bg-[#1B9C85] text-white hover:bg-[#1B9C85]">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
