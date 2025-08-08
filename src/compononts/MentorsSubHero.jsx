import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const MentorsSubHero = () => {
  useGSAP(()=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: ".starting", 
        start: "top 90%",
        end: "bottom 30%",
        scrub: 1,
      },
    })
      .from(".img1", {                
        x: "-70%",
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
      })
      .from(
        ".img2",                      
        {
          x: "70%",
          opacity: 0,
          duration: 0.2,
          ease: "power3.out",
        },
        "<"
      );
     
  },[])
  return (
    <div className='w-full h-[600px] px-[210px] mt-20   flex justify-center items-center'>
        <div className='w-[1120px] h-[442px] bg-[#5D38DE] rounded-2xl relative flex flex-col justify-center items-center starting'>

            <img  className='absolute left-[-4%] img1' src="image 48.png" alt="left" />
            <img className='absolute right-[-4%] img2' src="image 46.png" alt="right" />
            <h1 className='font-semibold text-center text-white text-[48px]'>Subscribe to our <br /> newsletters for updates</h1>
            <p className='text-white text-center'>Stay informed with the latest news, insights, and updates <br /> delivered staight to your inbox</p>

            <div className='flex relative gap-3 m-10'>
                  <input className=' w-[358px] h-[56px] rounded-3xl border-2 border-gray-200 pl-10 pr-6 '  placeholder='Enter Email'  type="email" name="" id="" />
                  <img className='absolute left-4 top-[30%]' src="sms.svg" alt="sms" />
                  <button className='bg-white text-[#5D38DE] w-[123px] h-[56px] rounded-4xl font-semibold cursor-pointer'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default MentorsSubHero