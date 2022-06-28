import React from 'react'
import Navbar from '../components/Navbar/Index';
import TopSongs from '../components/TopSongs/Index'
import TopArtist from '../components/TopArtist/Index'


const Home = () => {
  return (
    <>
    <Navbar/>
    <div style= {{ width: `90%`, margin :` 0 auto` }} >
    <TopSongs/>
    <TopArtist/>

    </div>
    </>
  )
}

export default Home