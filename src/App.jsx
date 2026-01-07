import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css'
import { useLocation, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/landing page/TopNavbar';
import LogoSec from './components/landing page/LogoSec';
import Navbar from './components/landing page/Navbar';
import Home from './components/landing page/Home';
import About from './components/landing page/About';
import NewsCategory from './components/landing page/NewsCategory';
import NewsDetails from './components/landing page/NewsDetails';
import ImageGallery from './components/landing page/ImageGallery';
import ContactUs from './components/landing page/ContactUs';
import Footer from './components/landing page/Footer';
import UserSignUp from './components/landing page/UserSignUp';
import Login from './components/landing page/Login';
import EditProfile from './components/adminComponent/EditProfile';
import AllNews from './components/adminComponent/AllNews';
import AdminContactUsList from './components/adminComponent/AdminContactUsList';
import UserEditProfile from './components/userComponent/UserEditProfile';
import PostNews from './components/userComponent/PostNews';
import YourNews from './components/userComponent/YourNews';
import UserAllNewsList from './components/userComponent/UserAllNewsList';
import NotFound from './NotFound';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect, useState } from 'react';
function App() {
  const location = useLocation()
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user);
  }, [location])


  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
  return (<>
    <TopNavbar />
    <LogoSec />
    {/*<Navbar />  */}
    <Routes>
      {/*landing navbar*/}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about' element={<NewsCategory />} />
      <Route path='/news-details' element={<NewsDetails />} />
      <Route path='/gallery' element={<ImageGallery />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/UserSignUp' element={<UserSignUp />} />
      <Route path='/login' element={<Login />} />

      {/*admin route*/}
      {userData?.userType == "admin" && <>
        <Route path='/admin-profile' element={<EditProfile />} />
        <Route path='/admin-newslist' element={<AllNews />} />
        <Route path='/admin-ContactUS' element={<AdminContactUsList />} />
      </>}
      {/*user route*/}
      {userData?.userType == "user" && <>
        <Route path='/user-profile' element={<UserEditProfile />} />
        <Route path='/user-addnews' element={<PostNews />} />
        <Route path='/user-list' element={<YourNews />} />
        <Route path='/user-alllist' element={<UserAllNewsList />} />
      </>}
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </>)
}

export default App


