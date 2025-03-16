import react from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
     <div className="w-full h-screen bg-zinc-900 text-white">
      <NavBar />
      <Landing />
     </div>
    </>
  )
}

export default App
