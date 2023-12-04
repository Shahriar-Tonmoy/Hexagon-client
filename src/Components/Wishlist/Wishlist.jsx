import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import OneWish from "../OneWish/OneWish";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://hexagon-server.vercel.app/wishlist?userEmail=${user.email}`)
          .then((res) => res.json())
          .then((data) => setWishlist(data));
      }, []);
    
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://hexagon-server.vercel.app/wishlist/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                //console.log(data,data.deletedCount)
                if (data.deletedCount > 0) {
                  toast("DELETED SUCCESSFULLY");
                  const remainingProducts = wishlist.filter((pro) => pro._id !== id);
                  setWishlist(remainingProducts);
                }
              });
          }
        });
      };

  return (
    <div className="min-h-screen">
        <ToastContainer></ToastContainer>
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#59CE8F]">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {wishlist.map((wish) => (
          <OneWish key={wish._id} wish={wish} handleDelete={handleDelete}></OneWish>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
