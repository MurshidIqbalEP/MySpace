import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const ShipxNews = () => {
    useGSAP(()=>{
      gsap.from(".anime2",{
        scrollTrigger:{
            trigger: ".anime2",      
            start: "top center", 
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      })

      gsap.from(".card-item", {
  scrollTrigger: {
    trigger: ".card-item",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
});
    },[])
  return (
    <div className="relative min-h-screen bg-[#25252D] overflow-hidden">
 
  <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat bg-center bg-[length:400px_900px] opacity-6 z-0"></div>

  <div className="absolute top-60 left-0 w-[300px] h-[300px] bg-[#646FC6] rounded-full blur-[100px]  opacity-50 z-0"></div>
  <div className="absolute bottom-[15%] right-0 top-[70%] w-[250px] h-[250px] bg-[#646FC6] rounded-3xl blur-[100px]  opacity-50 z-0"></div>

  <div className="relative z-10 text-white px-30 pt-20">
    <div className='h-[161px] flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
           <button className='w-[114px] h-[38px] rounded-full border-2 border-gray-100 flex justify-center items-center anime2 '>ShipX News</button>
           <h1 className='text-6xl font-medium anime2'>The Shipping Journal</h1>
           <img src="Vector 7.png" alt="" className='absolute top-[60%] left-[32%] w-[15%] h-[24%]' />
           <p className='text-sm anime2'>Discover our latest covering industry updates & expert advice</p>
        </div>

        <button className='w-[158px] h-[56px] rounded-full bg-white/10 backdrop-blur-xs flex items-center pl-6 font-light relative anime2'>View all <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>

    </div>
   
  </div>
  <div className='grid grid-cols-3 p-20 gap-y-10 gap-x-10 mx-auto w-fit '>
        <div className='w-[392px] h-[498px] relative flex flex-col  gap-3 card-item'>
            <img src="img1.png" alt="" />
            <h1 className='text-2xl font-bold text-white max-w-[350px]'>Top 5 Trends Shaping Modern Logistics in 2025</h1>
            <p className='text-sm  text-white max-w-[350px]'>Discover how AI, automation, and sustainability are transforming global supply chains</p>
            <button className=' w-[180px] h-[56px] text-white bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>

        </div>
        <div className='w-[392px] h-[498px] relative flex flex-col  gap-3 card-item'>
            <img src="img2.png" alt="" />
            <h1 className='text-2xl font-bold text-white max-w-[350px]'>Greener Supply Chains Start with Smart Moves</h1>
            <p className='text-sm  text-white max-w-[350px]'>Eco-friendly routes and low-emission fleets are redefining logistics efficiency</p>
            <button className=' w-[180px] h-[56px] text-white bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
        </div>
        <div className='w-[392px] h-[498px] relative flex flex-col  gap-3 card-item'>
            <img src="img3.png" alt="" />
            <h1 className='text-2xl font-bold text-white max-w-[350px]'>Tracking in Real Time Is Reshaping Logistics Industry</h1>
            <p className='text-sm  text-white max-w-[350px]'>Live tracking improves transparency, speeds up delivery, and builds customer trust</p>
            <button className=' w-[180px] h-[56px] text-white bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
        </div>
        <div className='w-[392px] h-[498px] relative flex flex-col  gap-3 card-item'>
            <img src="img4.png" alt="" />
            <h1 className='text-2xl font-bold text-white max-w-[350px]'>Simplifying Cross-Border Shipping with Advanced Tech</h1>
            <p className='text-sm  text-white max-w-[350px]'>Automation and smart systems are making international shipping smoother than ever</p>
            <button className=' w-[180px] h-[56px] text-white bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
        </div>
        <div className='w-[392px] h-[498px] relative flex flex-col  gap-3 card-item'>
            <img src="img5.png" alt="" />
            <h1 className='text-2xl font-bold text-white max-w-[350px]'>Automation Is Rebuilding the Modern Warehouse</h1>
            <p className='text-sm  text-white max-w-[350px]'>Robots and AI are helping warehouses run faster, smarter, and with fewer errors</p>
            <button className=' w-[180px] h-[56px] text-white bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
        </div>
        <div className='w-[392px] h-[498px] relative flex flex-col  gap-3 card-item'>
            <img src="img6.png" alt="" />
            <h1 className='text-2xl font-bold text-white max-w-[350px]'>Why Fast Delivery Speed Truly Matters Today</h1>
            <p className='text-sm  text-white max-w-[350px]'>Fast delivery is essential. Customers expect speed, accuracy, and lower costs</p>
            <button className=' w-[180px] h-[56px] text-white bg-[#646FC6] rounded-[60px] flex items-center pl-7 font-mono relative'>Contact us <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>
        </div>

    </div>
</div>

  )
}

export default ShipxNews