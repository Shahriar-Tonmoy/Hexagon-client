import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import Job from "../Job/Job";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import MyAddedProperty from "../MyAddedProperty/MyAddedProperty";
import BoughtProperty from "../BoughtProperty/BoughtProperty";

const BoughtProperties = () => {
  const [boughtProperties, setMyProperties] = useState([]);
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user.email);


  useEffect(() => {
    fetch(`http://localhost:3000/offers?BuyerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyProperties(data));
  }, []);


  return (
    <div className="min-h-screen">
      <ToastContainer></ToastContainer>
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#59CE8F]">
        My Offered Properties
      </h1>
      <div className="grid grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {boughtProperties.map((property) => (
          <BoughtProperty
            key={property._id}
            property={property}
          ></BoughtProperty>
        ))}
      </div>
    </div>
  );
};

export default BoughtProperties;