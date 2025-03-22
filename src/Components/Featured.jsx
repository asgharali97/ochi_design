import React from 'react'

const Featured = () => {
  return (
    <>
      <div className="w-full py-14">
        <div className="heading px-14 py-8">
            <h1 className='text-5xl font-semibold'>Featured Projects</h1>
        </div>
        <div className="border-t-1 border-zinc-600 mt-4"></div>
        <div className="px-14">
            <div className="cards w-full mt-10 flex gap-8">
                <div className="cardcontainer relative w-1/2 h-[80vh]">
                    <div className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl uppecase text-[#cdea68]">FYDE</div>
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                        <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[80vh]">
                    <div className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl uppecase text-[#cdea68]">carboard spaceship</div>
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Featured
