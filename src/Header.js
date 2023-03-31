import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import logo from './logo.svg';

const Appheader = () => {
  const [displayName, setDisplayname] = useState("");
  const [showdata, setShowData] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowData(false);
    } else {
      setShowData(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      } else {
        setDisplayname(username);
      }
    }
  }, [location]);
  return (
    <div>
      {showdata && (
        <div className="header">
 <img src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg" style={{widt
:"60px" , 'padding-bottom': '10px', "height":"60px"}} />        

          <Link to={"/"}>E-Commerce Dash Board</Link>
          <Link style={{ float:"right" ,"padding-bottom":'10px' }} to={"/login"}>
            Logout
          </Link>
          <span style={{ marginLeft: "60%" }}>
            Welcome <b>{displayName}</b>
          </span>
        <div>
          <Navbar />
        </div>


          
        </div>
      )}

    </div>
  );
};

export default Appheader;
