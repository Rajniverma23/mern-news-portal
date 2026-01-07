import React from 'react'
import  './TopNavbar.css';
import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function TopNavbar() {
    return (<>
       <div class="container-fluid text-center">
  <div class="row py-2 mt-1  " style={{backgroundColor:"brown"}}>
        <div class="col text-start  typewriter ps-4 text-font font-bold text-light">
    Welcome..!! to Our News Channel..!!
      </div>
    <div class="col text-light mt-1 text-end" style={{display:"flex",justifyContent:"center",gap:"7px"}}>
      <FaFacebook />
      <FaYoutube />      
      <FaTwitter />
     <FaInstagramSquare />
    </div>
    <div class="col text-light typewriter text-end text-font ">
   <MdOutgoingMail />  rajniverma276137@gmail.com
    </div>
  </div>
</div>
    </>);
}
export default TopNavbar;


