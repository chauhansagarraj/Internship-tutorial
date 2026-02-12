
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
import WatchComp from './components/Navbar/WatchComp'
import NotFoundComp from './components/Navbar/NotFoundComp'
import TeamsComp from './components/DynamicRouting/TeamsComp'
import TeamDetails from './components/DynamicRouting/TeamDetails'
import { UseStateDemo1 } from './components/UseState.jsx/UseStateDemo1'
import { UseStateDemo2 } from './components/UseState.jsx/UseStateDemo2'
import { UseStateDemo3 } from './components/UseState.jsx/UseStateDemo3'
import StudentForm from './components/FormValidate/StudentForm'
import JobApplication from './components/FormValidate/JobApplication'
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
        <Route path="/watch/:name" element={<WatchComp />} />
        <Route path="/*" element={<NotFoundComp />} />
        <Route path="/teams" element={<TeamsComp />} />
        <Route path="/teamDetails/:name" element={<TeamDetails />} />
        <Route path="/useStateDemo1" element={<UseStateDemo1 />} />
        <Route path="/useStateDemo2" element={<UseStateDemo2 />} />
        <Route path="/useStateDemo3" element={<UseStateDemo3 />} />
        <Route path='studentForm' element={<StudentForm/>}/>
        <Route path='jobApplication' element={<JobApplication/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
