import React from 'react'
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import './Footer.css';
function Footer() {
  return (
    <>
      <div className='row footer bg-dark' style={{ height: "260px" }}>
        <div className='col-sm-10 mx-auto'>
          <div className='row py-3'>
            <div className='col-sm-4 pt-1 px-1 ps-1  text-light'>
              <b style={{ color: "brown", fontWeight: "bold", fontSize: "50px", textTransform: "uppercase", fontFamily: "Algerian" }}> News
                Times  <IoTimeSharp style={{ fontSize: "40px" }} /> </b> <br /> <br />
              <a href='#'><img className='img-fluid   footerlogo' style={{ color: "white", }} /><FaGooglePlay style={{ color: "white", fontSize: "50px" }} /> Google play</a>
              <br /><br /> <br /><a href='#'><img className='img-fluid footerlogo ' /><IoLogoApple style={{ color: "white", fontSize: "50px" }} />App store</a>
              <a href='#'><img className='img-fluid footerlogo' /></a>
              <a href='#'><img className='img-fluid footerlogo' /></a>
            </div>
            <div className='col-sm-4 p-2 text-light'>
              <p className='footertext'>Lorem ipsum dolor sit amet consectetur pariatur dsuscipit consejkhsdiudfhuinjks gdwuygygyusgdwuygygyusgxvsj ywegdyuguvdvg gdwuygygyusgxvsj ywegdyuguvdvg gdwuygygyusgxvsj ywegdyuguvdvggxvsj ywegdyuguvdvg gyiwgsydgxvwxvs vwfstfgvx fgwfshgjhsdagxku vsxgtudemw fsytxvwyts  hsxy8tkwvdwe guytd78oxlsv,x gywqitsyquu....!!!!!</p>
            </div>
            <div className='col-sm-4 p-2'>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.6264475201765!2d82.0578975740581!3d27.82126702046032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39982e6aaaaaaaa9%3A0x4ed1ef3091011135!2sTATHAGAT%20GAUTAM%20BUDDHA%20GOVT%20POLYTECHNIC%20SIRSIYA%20SHRAVASTI!5e0!3m2!1sen!2sin!4v1758696470486!5m2!1sen!2sin"
                className='w-100'
                height={250}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> 
              {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.6264475201765!2d82.0578975740581!3d27.82126702046032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39982e6aaaaaaaa9%3A0x4ed1ef3091011135!2sTATHAGAT%20GAUTAM%20BUDDHA%20GOVT%20POLYTECHNIC%20SIRSIYA%20SHRAVASTI!5e0!3m2!1sen!2sin!4v1758696470486!5m2!1sen!2sin"
                 width={550}
                 height={250}
                  style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='row bfooter bg-dark'>
        <div className='col-sm-12 text-light text-center pb-1 mt-2 '>
          <span style={{ fontSize: "13px", marginBottom: "10px" }}>Design and Developed by<b style={{ color: "red", fontSize: "13px" }}> Rajni Verma</b> &copy; <a href='https://www.techpile.in'>Techpile Technology</a></span>
        </div>
      </div>
    </>
  )
}
export default Footer



