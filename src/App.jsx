import './App.css'
import NavBar from './components/Navbar/NavBar'
import Footer from './pages/Footer/Footer'
import Landing from './pages/Landing/Landing'
import SpaceOverview from './pages/Spaces/SpaceOverview'
import WhyCards from './pages/Whycards/WhyCards'
import AdvertisePage from './pages/advertise/AdvertisePage'

function App() {

  return (
    <>
      <NavBar />
      <Landing />
      <WhyCards />
      <SpaceOverview />
      <AdvertisePage />
      <Footer />
    </>
  )
}

export default App
