import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const MentorsHero = () => {
    useGSAP(() => {
      const tl = gsap.timeline({
        delay: 0.5,
        defaults: { ease: "power3.out", duration: 0.8 },
      });
       const ImageTl = gsap.timeline({ delay: 0.5,
        defaults: { ease: "power3.out", duration: 0.8 },})

      tl.from(".topanimation", { y: -40, opacity: 0, stagger: 0.25 })
        .from(".bottomanimation", { y: 40, opacity: 0, stagger: 0.25 }, "-=0.4")
        .from(".yellowline", {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

     

          gsap
      .timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
      .from(".book", { y: -40, opacity: 0 })                     
      .from(".star", { x: -40, opacity: 0 }, "-=0.6")            
      .from(".bag",  { x: -60, y: 60, opacity: 0 }, "-=0.6");    

    /* Gentle looping bob */
    gsap.to(".book", {
      y: 12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".star", {
      y: -20,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".bag", {
      y: 14,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    }, []);
  return (
    <div className='w-full h-[550px] px-[210px] gap-2 pt-12 flex '>
          <div className="w-1/2 flex flex-col gap-7 relative ">
           <button className='w-[134px] h-[38px] bg-[#F5F2FF] text-[#5D38DE] rounded-3xl font-semibold topanimation'>Our Mentors</button>
           <h1 className='text-[60px] font-bold z-20 topanimation'>Elevate your Skills <br /> with our Experts </h1> 
           <img className='absolute right-[13%] bottom-[53%] w-[240px] yellowline' src="Vector 2.png" alt="yellow line" />
           <div className='flex gap-1 bottomanimation'>
                <div>
                    <img src="users.png" alt="users" />
                </div>
                <div className='flex flex-col justify-center'>
                    <img src="stars.png" alt="stars" />
                    <h2>2.5k Reviews</h2>
                </div>
           </div>
           <div className='flex gap-10 bottomanimation'>
                <button  className='w-[197px] h-[56px] bg-[#5D38DE] text-white rounded-3xl font-semibold cursor-pointer'>Explore Courses</button>
                <div className='flex  items-center gap-2'>
                    <div className='bg-black w-[56px] h-[56px] rounded-full flex justify-center items-center'>
                       <button><img src="play.png" alt="play" /></button>
                    </div>
                    <h2 className='font-semibold'>How it works</h2>
                    
                </div>
           </div>

          </div>
          <div className="w-1/2 relative"> 
             <img src="heroimg.png " className="image" alt="main image" />
             <img  className='absolute right-0 top-0 book' src="book.png" alt="book" />
             <img  className='absolute left-0 top-0 star' src="star.png" alt="star" />
             <img  className='absolute left-[-15%] bottom-[10%] bag' src="bag.png" alt="bag" />
          </div>
    </div>
  )
}

export default MentorsHero