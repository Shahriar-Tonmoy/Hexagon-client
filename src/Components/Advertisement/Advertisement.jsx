import { useEffect, useState } from "react";
import Property from "../Property/Property";

const Advertisement = () => {

    const [properties, setProperties] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:3000/properties?advertise=yes`)
          .then((res) => res.json())
          .then((data) => setProperties(data));
      }, []);
    
      

      //const verifiedProperties = properties.filter((property) => property.status === 'verified');
    //   const slicedProperties = verifiedProperties.slice(0,4)
      

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#59CE8F]">
        Advertisement
      </h1>
      <div className="grid grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {properties.map((property) => (
          <Property
            key={property._id}
            property={property}
          ></Property>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
