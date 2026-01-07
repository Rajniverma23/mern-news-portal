import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom'
const About = () => {
  const location = useLocation()

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}

      <div className='row py-2 mt-1'>
        <p className='text-center bg-color text-font fs-2'> <b className='text-light text-font ' style={{ fontWeight: "bold" }}>About Us</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row py-3' style={{ height: "250px" }}>
            <div className='col-sm-6 pt-1 ps-5'>
              <p>At the heart of our journey lies a simple yet powerful vision: to create a platform that prioritizes quality, trust, and customer satisfaction above all else..!! What started as a small idea has today grown into a trusted name, hard work, and commitment to excellence.
           . Our strength lies not just in what we do, but how we do it — with integrity, innovation, and an unwavering focus on delivering value. For us, success is not just measured in numbers, but in the trust and loyalty of our customers.</p>
             
            </div>
            <div className='col-sm-6 pb-1'>
            <iframe width="500" height="250" src="https://www.youtube.com/embed/XSfMJB4np5g" title="Build the Future at Dropbox With Us | Life Inside Dropbox | Dropbox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <div className='row ps-4'>
            <div className='col-sm-4 '>
              <img src='/images/n1.jpg' className='img-thumbnail  w-100' style={{ textDecoration: "none" }} />
            </div>
            <div className='col-sm-8 pt-5 pe-4 '>
              <p>At [<b style={{color:"brown",fontSize:"15px"}}>News Times platform</b>], our mission is to deliver accurate, timely, and trustworthy news to our readers. The image above offers a glimpse into our newsroom — a space driven by dedication, integrity, and a passion for uncovering the truth.

Our team is made up of experienced journalists, writers, and researchers committed to bringing you the stories that matter..!! </p>
            </div>

          </div>
          <hr />
          <p className='fs-2 text-center text-font text-dark '>Our Vision <b className='text-mycolor text-font fs-2'>& Mission</b></p>
          <div className='row py-3'>
            <div className='col-sm-12'>
              <p className='text-center '>Our vision is to become a leading source of honest, impactful journalism that empowers individuals and strengthens communities!  
              <span className='text-mycolor'>  Our mission is to deliver accurate, unbiased, and timely news that informs, educates, and inspires..!!</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default About

