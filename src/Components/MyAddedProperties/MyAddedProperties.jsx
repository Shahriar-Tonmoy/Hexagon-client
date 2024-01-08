import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import Job from "../Job/Job";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import MyAddedProperty from "../MyAddedProperty/MyAddedProperty";

const MyAddedProperties = () => {
  const [myProperties, setMyProperties] = useState([]);
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user.email);


  useEffect(() => {
    fetch(`https://hexagon-server.vercel.app/properties?agentEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyProperties(data));
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
        fetch(`https://hexagon-server.vercel.app/properties/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data,data.deletedCount)
            if (data.deletedCount > 0) {
              toast("DELETED SUCCESSFULLY");
              const remainingProducts = myProperties.filter((pro) => pro._id !== id);
              setMyProperties(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      <ToastContainer></ToastContainer>
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#00ADB5]">
        My Added Properties
      </h1>
      <div className="grid grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {myProperties.map((property) => (
          <MyAddedProperty
            key={property._id}
            property={property}
            handleDelete={handleDelete}
          ></MyAddedProperty>
        ))}
      </div>
    </div>
  );
};

export default MyAddedProperties;