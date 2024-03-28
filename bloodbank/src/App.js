import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import MakeRequest from './components/MakeRequest';
import Home from './components/Home';
import IncomingRequest from './components/IncomingRequest';
import LoadingBar from 'react-top-loading-bar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

const App = () => {
  const [progress, setProgress] = useState(0);
  const setProgressUtil = (progress) => {
    setProgress(progress);
  }
  return (
    <>

        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Navbar setProgress={setProgressUtil} />
        {/* <Hero /> */}
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/incomingRequests" element={ <IncomingRequest/>}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/MakeRequest" element={<MakeRequest />}></Route>
          {/* <Route exact path="/requests" element={<Requests/>}></Route> */}
          <Route exact path="/profile" element={<Profile/>}></Route> 
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
        </Routes>
        <Footer />
    </>

  )
}

export default App