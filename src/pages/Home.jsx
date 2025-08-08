import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.from(".box", {
      x: -600,
      duration: 2,
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "bottom center",
        markers: true, 
        toggleActions:"reverse none none none",
        scrub:1,
      }
    });
  },);

  return (
    <div>
      <div className='bg-black w-full h-screen'></div>

      <div className='bg-white p-4 w-full h-screen flex flex-col gap-2 container'>
        <div className='bg-black w-[300px] h-[300px] box'></div>
      </div>

      <div className='bg-black w-full h-screen'></div>
    </div>
  );
};

export default Home;
