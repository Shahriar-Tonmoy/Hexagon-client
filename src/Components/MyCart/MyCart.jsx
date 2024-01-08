import { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyCart = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch("https://brand-website-server-9lu7pgb34-mirza-shahriar-tonmoys-projects.vercel.app/cart_products")
          .then((res) => res.json())
          .then((data) => setCarts(data));
      }, []);

    const handleDelete = id =>{
        fetch(`https://brand-website-server-9lu7pgb34-mirza-shahriar-tonmoys-projects.vercel.app/cart_products/${id}`,{
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data,data.deletedCount)
                if(data.deletedCount > 0){
                    toast('DELETED SUCCESSFULLY');
                    const remainingCart = carts.filter(pro => pro._id !== id);
                    setCarts(remainingCart);
                }
            })
    }
    
  return (
    <div className="min-h-screen">
        <ToastContainer></ToastContainer>
      <div className="mt-32 mb-32">
        <h1 className="text-center text-5xl font-bold mb-16 text-[#00ADB5]">
          Your Added Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-10 ">
          {carts.map((product) => (
           <SingleCart key={product._id} product={product} handleDelete={handleDelete}></SingleCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
