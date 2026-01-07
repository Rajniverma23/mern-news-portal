import React from 'react'
import Slider from './Slider';
import NewsCategory from './NewsCategory';
import LatestNews from './LatestNews';
import LatestVideos from './LatestVideos';
import City from './City';
import ImageGallery from './ImageGallery';
import About from './About';
import Footer from './Footer'
import Navbar from './Navbar';
function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <NewsCategory />
      <LatestNews />
      <LatestVideos />
      < City />
      <ImageGallery />
      < About />
      <Footer />
    </>)
}

export default Home
