import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import NoProducts from "../NoProducts/NoProducts";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useEffect, useState } from "react";

const Products = () => {
  const allProducts = useLoaderData();
  const { name } = useParams();

  //const adImages = clickedBrandProductsAd.images;

  const clickedBrandProducts = allProducts.filter(
    (product) => product.brandName.toLowerCase() === name.toLowerCase()
  );

  const Porsche = (
    <AwesomeSlider className="h-96">
      <div data-src="https://i.ibb.co/GkYkThv/porsche-2.jpg" />
      <div data-src="https://i.ibb.co/zbrXrxq/porsche-5.jpg" />
      <div data-src="https://i.ibb.co/PG2C5DH/02-09-2019-PORSCHE-Newsroom-Banner-Hero-v4.jpg" />
    </AwesomeSlider>
  );
  const Ferrari = (
    <AwesomeSlider className="h-96">
      <div data-src="https://i.ibb.co/bJqw07W/ferrari-car-splash-banner-image.jpg" />
      <div data-src="https://i.ibb.co/rpgBW08/ferrari-beautiful-pictures-wallpaper-preview.jpg" />
      <div data-src="https://i.ibb.co/0K3cXXP/desktop-wallpaper-best-3-ferrari-backgrounds-on-hip-ferrari-for.jpg" />
    </AwesomeSlider>
  );
  const Lamborghini = (
    <AwesomeSlider className="h-96">
      <div data-src="https://i.ibb.co/9TZTTZY/Lamborghini.jpg" />
      <div data-src="https://i.ibb.co/xX3PSVh/Lambor.jpg" />
      <div data-src="https://i.ibb.co/5RGk3Jm/2014-lamborghini-aventador-lp700-4-coupe-ad-personam-white-red-and-green-lamborghini-wallpaper-previ.jpg" />
    </AwesomeSlider>
  );
  const Bugatti = (
    <AwesomeSlider className="h-96">
      <div data-src="https://i.ibb.co/hsj6sSL/2024-Bugatti-Bolide-1.jpg" />
      <div data-src="https://i.ibb.co/9NGDdFG/2024-Bugatti-Bolide-10.jpg" />
      <div data-src="https://i.ibb.co/yqYTNTF/maxresdefault.jpg" />
    </AwesomeSlider>
  );
  const mcLaren = (
    <AwesomeSlider className="h-96">
      <div data-src="https://i.ibb.co/njrZfdS/rybrook-mclaren-p1-banner-2-1920x650.jpg" />
      <div data-src="https://i.ibb.co/HYHqVsg/mclaren-720-vs-gt.jpg" />
      <div data-src="https://i.ibb.co/bL6HTMv/race-car-mclaren-p1-gtr.jpg" />
    </AwesomeSlider>
  );
  const koenigsegg = (
    <AwesomeSlider className="h-96">
      <div data-src="https://i.ibb.co/Y25ZVhV/Koenigsegg-One-1-Goodwood-Festival-Of-Speed-2014-001-1200x800.jpg" />
      <div data-src="https://i.ibb.co/jVJF3Lv/bd0be717408483-562b98fcb2b8a.jpg" />
      <div data-src="https://i.ibb.co/2nFT0hn/desktop-wallpaper-koenigsegg-ccxr-koenigsegg-ccr.jpg" />
    </AwesomeSlider>
  );

  return (
    <div>
        <h1 className="text-center text-[#1B9C85] font-bold text-6xl my-10">{name}</h1>
      {name == "Porsche" && Porsche}
      {name == "Ferrari" && Ferrari}
      {name == "Lamborghini" && Lamborghini}
      {name == "Bugatti" && Bugatti}
      {name == "McLaren" && mcLaren}
      {name == "Koenigsegg" && koenigsegg}
      

      <div className="mt-32 mb-32">
        <h1 className="text-center text-5xl font-bold mb-16 text-[#1B9C85]">
          Products
        </h1>
        <div className="grid grid-cols-1 container mx-auto  gap-10 ">
          {!clickedBrandProducts.length ? (
            <NoProducts></NoProducts>
          ) : (
            clickedBrandProducts.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
