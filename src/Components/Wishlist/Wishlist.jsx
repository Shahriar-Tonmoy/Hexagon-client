import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import OneWish from "../OneWish/OneWish";

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/wishlist?userEmail=${user.email}`)
          .then((res) => res.json())
          .then((data) => setWishlist(data));
      }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#59CE8F]">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {wishlist.map((wish) => (
          <OneWish key={wish._id} wish={wish}></OneWish>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
