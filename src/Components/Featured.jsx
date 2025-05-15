import React, { useRef } from 'react'
import gsap from 'gsap'
const Featured = () => {
  const titleRef = useRef(null)
  const titledRef = useRef(null)

  const handleHover = () => {
    console.log("enter")
    gsap.to(titleRef.current, {
      y:-50,
      duration:0.5,
      ease:"power2.in",
      "display":"block",
    })
  }

  const handleMouseLeave = () =>{
    gsap.from(titleRef.current, {
      y:-50,
      duration:0.5,
      ease:"power2.out",
      "display":"none",
    })
  }
  return (
    <>
      <div className="w-full py-14">
            <h1 className='text-5xl font-semibold'>Featured Projects</h1>
        </div>
        <div className="border-t-1 border-zinc-600 mt-4"></div>
        <div className="px-14">
            <div className="cards w-full mt-10 flex gap-8">
                <div className="cardcontainer relative w-1/2 h-[80vh]">
                    <div ref={titleRef} className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl uppercase text-[#cdea68] hidden">FYDE</div>
                    <div className="card w-full h-full rounded-xl overflow-hidden" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                        <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[80vh]">
                    <div ref={titledRef} className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl uppecase text-[#cdea68]">carboard spaceship</div>
                    <div className="card w-full h-full rounded-xl overflow-hidden" onMouseEnter={handleHover}>
                    <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" className='rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured
