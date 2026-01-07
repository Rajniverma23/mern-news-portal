import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/landing page/Navbar";
const NotFound=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
//  navigate('/Login');
    },[])
return(<>
<Navbar/>
<br /><br /><br /><br />
<div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">
        <h1 className="text-center NA m-0">404</h1>
        <p className="text-center nf m-0">Not Found</p>
        <p className="text-center fs-5 m-0">The Request Page Was Not Found</p>
    </div>
    <div className="col-sm-2"></div>
</div>
<br /><br /><br /><br />
</>)
}
export default NotFound