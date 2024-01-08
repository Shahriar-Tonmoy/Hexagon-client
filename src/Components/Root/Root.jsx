import { useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
    const [theme, setTheme] = useState('light')
    const handleToggle = e=>{
        console.log(e.target.checked);
        const buttonStat = e.target.checked;
        if(buttonStat === true){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
      }
    return (
           <div className="bg-[#222831]" data-theme='light'>
           <Nav handleToggle={handleToggle}></Nav>
           <Outlet></Outlet>
           <Footer ></Footer>
        </div>
    );
};

export default Root;