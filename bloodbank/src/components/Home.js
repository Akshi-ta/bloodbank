import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Navbar'
import Hero from './Hero'
import { useState } from 'react'

const Home = (props) => {
    const [progress, setProgress] = useState(0);
    const setProgressUtil = (progress) => {
      setProgress(progress);
    }
  return (
    <div>
        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Navbar setProgress={setProgressUtil} />
        <Hero />
    </div>
  )
}

export default Home