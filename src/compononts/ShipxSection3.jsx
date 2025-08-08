import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const ShipxSection3 = () => {
  useGSAP(()=>{
     gsap.utils.toArray(".floating-img").forEach((img, i) => {
  gsap.to(img, {
    y: 20,
    duration: 3 + Math.random(), 
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1, 
    delay: Math.random() * 1.5, 
  });
});
  },[])
  return (
    <div className='w-full h-[780px] bg-[#25252D] relative flex justify-center items-center'>
       <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat bg-center bg-[length:400px_900px] opacity-6 z-0"></div> 

       <div className='relative w-[1360px] h-[640px] bg-[#23232b] z-10 rounded-4xl flex flex-col justify-center items-center text-center gap-7'>
            <img src="Polygon 3.png" alt="alt"  className='absolute top-[105px] left-[67px] floating-img'/>
            <img src="Star 9.png" alt="ddd"  className='absolute top-[275px] left-[182px] floating-img'/>
            <img src="Ellipse 3004.png" alt="" className='absolute top-[455px] left-[86px] floating-img' />
            <img src="Star 10.png" alt=""  className='absolute top-[105px] right-[197px] floating-img'/>
            <img src="Rectangle 14375.png" alt=""  className='absolute top-[275px] right-[86px] floating-img'/>
            <img src="Polygon 4.png" alt=""  className='absolute top-[441px] right-[197px] floating-img'/>

            <img src="fwr.png" alt="" />
            <h1 className='text-5xl font-bold text-white'>Ready to supercharge <br /> your shipping</h1>
            <p className='text-lg font-light text-white'>Join 10,000+ businesses already using ShipX to simplify logistics,<br /> cut costs, and scale operations with ease</p>

            <div className='flex gap-5 mt-6 text-white'>
     <button className=' w-[180px] h-[56px] bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-medium relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
     <button className=' w-[180px] h-[56px] bg-white/10 backdrop-blur-xs rounded-[60px] flex items-center pl-6 font-medium relative'>Get Started <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
    </div>
       </div>
    </div>
  )
}

export default ShipxSection3