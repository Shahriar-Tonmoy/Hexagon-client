const Footer = () => {
  return (
    <footer className="footer p-10 mx-auto flex justify-around bg-[#393E46]">
  <aside className="flex justify-center items-center">
  <div className="flex flex-col justify-center mt-5 items-center gap-3">
          <img src="https://i.ibb.co/C29NwnH/smooth-color-gradient-hexagon-icon-logo-vector-21165494.jpg" className="h-8" alt="" />
          <p className="text-3xl font-bold text-white">HEXAGON</p>
          {/* <p className="text-lg text-[#00ADB5]">Next Wheels</p> */}
        </div>
  </aside> 
  <nav>
    <header className="footer-title text-[#00ADB5]">Services</header> 
    <a className="link link-hover text-[#00ADB5]">Branding</a>
    <a className="link link-hover text-[#00ADB5]">Secure market</a>
  </nav> 
  <nav>
    <header className="footer-title text-[#00ADB5]">Company</header> 
    <a className="link link-hover text-[#00ADB5]">About us</a>
    <a className="link link-hover text-[#00ADB5]">Contact</a>
   
  </nav> 
  <nav>
    <header className="footer-title text-[#00ADB5]">Legal</header> 
    <a className="link link-hover text-[#00ADB5]">Terms of use</a>
    <a className="link link-hover text-[#00ADB5]">Privacy policy</a>
    <a className="link link-hover text-[#00ADB5]">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;
