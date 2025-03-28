import react from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import Marque from './Components/Marque';
import About from './Components/About';
import Play from './Components/Play';
import Featured from './Components/Featured';
import Review from './Components/Review';
import CTA from './Components/CTA';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
     <div className="w-full min-h-screen bg-zinc-900 text-white">
      <NavBar />
      <Landing />
      <Marque />
      <About />
      <Play />
      <Featured />
      <Review />
      <CTA />
     </div>
    </>
  )
}

export default App
