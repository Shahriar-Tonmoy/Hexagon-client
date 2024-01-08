import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, brandName, type, price, shortDescription, rating } =
    product;
  return (
    <div className="card lg:card-side bg-[#393E46] shadow-xl border-2 border-orange-200">
      <figure className="w-1/2">
        <img  
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#00ADB5]">{name}- {brandName}</h2>
        <p>{shortDescription}</p>
        <p className="font-semibold">Type - {type}</p>
        <p className="font-semibold">Price - {price}</p>
        <p className="font-semibold">Rating - {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}><button className="btn bg-[#00ADB5] text-white hover:bg-orange-500">Details</button></Link>
          <Link to={`/update/${_id}`}><button className="btn bg-[#00ADB5] text-white hover:bg-orange-500">Update</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
