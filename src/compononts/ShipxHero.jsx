import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const ShipxHero = () => {
  useGSAP(()=>{
    gsap.from(".anime",{
      y:-10,
      delay:0,
      opacity:0,
      stagger:1,
      duration:0.5,
    })
  },[])
  return (
    <div className="relative h-screen w-full">
  <img
    src="warehouse.jpg"
    alt="heroimg"
    className="h-full w-full object-cover filter contrast-80 brightness-60"
  />

 
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center px-4">
    <button className='bg-transparent w-[179px] h-[38px] border border-gray-100 rounded-[50px] anime'>Shipping Blog Insights</button>

    <h1 className="text-4xl md:text-6xl  font-bold   leading-tight tracking-[5px] anime">
      Discover Insights That Drive <br /> Smarter Shipping
    </h1>

    <p className='mt-3 anime'>Stay updated with key trends, expert tips, and innovation transforming <br /> global logistics and delivery with ShipX</p>

    <div className='flex gap-5 mt-6 anime'>
     <button className=' w-[180px] h-[56px] bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative '>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
     <button className=' w-[180px] h-[56px] bg-white/10 backdrop-blur-xs rounded-[60px] flex items-center pl-6 font-mono relative anime'>Get Started <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
    </div>
  </div>
</div>

  )
}

export default ShipxHero