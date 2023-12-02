import { useEffect } from "react";
import Banner from "/Banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Jobs from "../Jobs/Jobs";
import FAQ from "../FAQ/FAQ";
import Email from "../Email/Email";

const Home = () => {
  useEffect(() => {
    document.title = 'N E E D | Home'; 
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="hero h-[400px] md:h-[600px]"
        style={{
          backgroundImage: "url('https://i.ibb.co/6XYmz38/Banner.jpg')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col justify-between items-center">
            <h1 className="mb-5 text-3xl lg:text-8xl font-bold text-white text-left">
              <span className="text-[#59CE8F]">N E E D</span>, Where
              Opportunities Meet Talent
            </h1>
            <p className="hidden md:block text-white text-xl text-left">
            Welcome to <span className="text-[#59CE8F]">N E E D</span>, the dynamic platform where job seekers and employers unite in a vibrant marketplace! Explore endless opportunities as you seamlessly navigate through a world of job postings and bids. Whether you're a professional looking for your next challenge or a company seeking top talent, our innovative hub connects dreams with reality. Bid, Post, and Thrive - your journey to career excellence begins here!
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
        <h1 className="text-center text-5xl font-bold mb-16 text-[#59CE8F]">
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
