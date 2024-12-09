import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Signup';
import AboutUs from './component/AboutUs';
import React from 'react';
import SignIn from './component/SignIn';
import Pyfullstack from './component/Pyfullstack';
import PowerBi from './component/PowerBi';
import DsCourse from './component/DsCourse';
import Jafullstack from './component/Jafullstack';
import Footer from './component/Footer';
import Testimonials from './component/Testimonials'; // Corrected import
import Dasboard from './component/Dasboard';
import UDasboard from './component/UDasboard';
import Courses from './component/Courses';
import URegistration from './component/URegistration';
import TRegistration from './component/TRegistration';
import Tchangepassword from './component/Tchangepassword';    
import Tprofilesetting from './component/Tprofilesetting';  
import Tlogout from './component/Tlogout';  
import Taddcourses from './component/Taddcourses'; 
import TmyUser from './component/TmyUser';    
import FavoriteCourses from './component/FavoriteCourses';  
import RecommendedCourses from './component/RecommendedCourses';  
import Changepassword from './component/Changepassword';  
import ULogout from './component/ULogout';  
import ProfileSetting from './component/ProfileSetting';  
import Datascience  from './component/Datascience';
import Saleforce from './component/Salesforce';
import Sap from './component/Sap';
import Swift from './component/Swift';
import Aintellignce from './component/Aintellignce';
import Web from './component/Web';
import Graphics from './component/Graphics';
import Cyber from './component/Cyber';
import Network from './component/Network';
import Pega from './component/Pega'; 
import Softwaretest from './component/Softwaretest';
import Aamzonweb from './component/Aamzonweb';
import Andriod from './component/Andriod';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} /> {/* Default Route */} 
        <Route path="/home" element={<Home />} />  
        <Route path="/courses" element={<Courses />} />
        <Route path="/uRegistration" element={<URegistration />} />
        <Route path="/tRegistration" element={<TRegistration />} />
        <Route path="/tchangepassword" element={<Tchangepassword />} />   
        <Route path="/tprofilesetting" element={<Tprofilesetting />} />
        <Route path="/Tlogout" element={<Tlogout />} />  
        <Route path="/taddcourses" element={<Taddcourses />} />  
        <Route path="/tmyUser" element={<TmyUser />} />  
        <Route path="/favoriteCourses" element={<FavoriteCourses />} />  
        <Route path="/recommendedCourses" element={<RecommendedCourses />} /> 
        <Route path="/changePassword" element={<Changepassword />} /> 
        <Route path="/uLogout" element={<ULogout />} />  
        <Route path="/profileSetting" element={<ProfileSetting />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} /> {/* Adjusted to lowercase */}
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/pyfullstack" element={<Pyfullstack />} />
        <Route path="/PowerBi" element={<PowerBi />} />
        <Route path="/dscourse" element={<DsCourse />} />
        <Route path="/jfullstack" element={<Jafullstack />} />
        <Route path="/Dasboard" element={<Dasboard />} />
        <Route path="/UDasboard" element={<UDasboard />} />
        <Route path="/swift" element={<Swift />} />
        <Route path="/sap" element={<Sap />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/saleforce" element={<Saleforce />} />
        <Route path="/ai" element={<Aintellignce />} />
        <Route path="/web" element={<Web />} />
        <Route path="/gp" element={<Graphics />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/net" element={<Network />} />
        <Route path="/aws" element={<Aamzonweb />} />
        <Route path="/andriod" element={<Andriod />} />
        <Route path="/sf" element={<Softwaretest />} />
        <Route path="/pega" element={<Pega />} />




      </Routes>
      <Testimonials/>
      <Footer/>
    </Router>
  );
}

export default App;
