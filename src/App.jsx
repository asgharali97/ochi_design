import react from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import Marque from './Components/Marque';
import About from './Components/About';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
     <div className="w-full min-h-screen bg-zinc-900 text-white">
      <NavBar />
      <Landing />
      <Marque />
      <About />
     </div>
    </>
  )
}

export default App
