import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="flex relative h-screen bg-[url('https://i.ibb.co/hcFjb8R/HTML-404-Error-Page.gif')] bg-no-repeat bg-cover">
            {/* <h1 className="text-3xl md:text-8xl text-red-600">404 Error!</h1> */}
           
            <Link to='/'><button className="text-green-600 text-3xl border border-green-700 absolute left-auto">&lt;Go to Home</button></Link>
            
        </div>
    );
};

export default Error;