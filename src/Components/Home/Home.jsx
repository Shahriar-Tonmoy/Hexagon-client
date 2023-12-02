import { useEffect } from "react";
import Banner from "/Banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Jobs from "../Jobs/Jobs";
import FAQ from "../FAQ/FAQ";
import Email from "../Email/Email";

const Home = () => {
  useEffect(() => {
    document.title = 'Hexagon | Home'; 
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="hero h-[400px] md:h-[600px] bg-fixed"
        style={{
          backgroundImage: "url('https://i.ibb.co/SX7cTfg/1-a.webp')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex justify-around items-center gap-10">
            <h1 className="mb-5 text-3xl lg:text-8xl font-bold text-white text-left">
            Real Estate Redefined!
            </h1>
            <p className="hidden md:block text-white text-xl text-left">
            Welcome to <span className="text-[#1B9C85]">Hexagon</span>, your premier destination for seamless real estate transactions. Whether you're buying your dream home or selling a property, we provide a one-stop platform to streamline the process. Explore our extensive listings, connect with motivated buyers and sellers, and experience a new era of hassle-free real estate transactions. Your journey to homeownership and investment success begins here. Discover, transact, and thrive with <span className="text-[#1B9C85]">Hexagon</span>.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Jobs></Jobs>
      </div>
      <div
        className="container mx-auto mb-32"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-center text-5xl font-bold mb-16 text-[#1B9C85]">
          Most Asked Questions
        </h1>
        <FAQ></FAQ>
      </div>
      <div
        className="container mx-auto mb-32"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Email></Email>
      </div>
    </div>
  );
};

export default Home;
