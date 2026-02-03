
  // import './App.css'
// import { HeaderComp } from './components/HeaderComp'
// import FooterComp from './components/FooterComp'
import Mapdemo6 from './components/mapdemo/mapdemo6'
import Mapdemo7 from './components/mapdemo/mapdemo7'
import Mapdemo8 from './components/mapdemo/mapdemo8'
import Mapdemo9 from './components/mapdemo/mapdemo9'
import Mapdemo10 from './components/mapdemo/mapdemo10'
import { Route , Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import {NetflixHome} from './components/Navbar/NetflixHome'
import { NetflixShows } from './components/Navbar/Netflixshows'
import { NetflixMovies } from './components/Navbar/Netflixmovies'
import  NetflixElite  from './components/Navbar/NetflixElite'
import NetflixLiked from './components/Navbar/NetflixLiked'
import NetflixMostWatched from './components/Navbar/NetflixMostWatched'

function App() {

  return (
    <>
     <div>
     {/* <h1>Map Examples</h1>
      <Mapdemo6 />
      <Mapdemo7 />
      <Mapdemo8/>
      <Mapdemo9/>
      <Mapdemo10/> */}
      <Navbar>
        </Navbar>
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />} />
        <Route path="/netflixshows" element={<NetflixShows />} />
        <Route path="/netflixmovies" element={<NetflixMovies />} />
        <Route path="/netflixmostwatched" element={<NetflixMostWatched />} />
        <Route path="/netflixliked" element={<NetflixLiked />} />
        <Route path="/netflixelite" element={<NetflixElite />} />
      </Routes>
     </div>
    </>
  )
}

export default App
