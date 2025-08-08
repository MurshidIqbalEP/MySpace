import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const ShipxNav = () => {
  useGSAP(()=>{
    gsap.from(".routes",{
     opacity: 0,
      y: 10,
      // ease: "power3.out",
      stagger: 1
    })
  })
  return (
    <div className="absolute top-0 left-0 z-30  w-full h-[70px] flex items-center justify-between p-2">
      <img src="shipxlogo.png" alt=""  />

      <div className="flex gap-10 text-white text-lg font-light tracking-widest cursor-pointer ">
        <p className="hover:bg-white/20 px-3 py-1 rounded-full transition-all duration-300 ">
          Home
        </p>
        <p className="hover:bg-white/20 px-3 py-1 rounded-full transition-all duration-300 ">
          About
        </p>
        <p className="hover:bg-white/20 px-3 py-1 rounded-full transition-all duration-300 ">
          Solutions
        </p>
        <p className="hover:bg-white/20 px-3 py-1 rounded-full transition-all duration-300 ">
          Blog
        </p>
      </div>

      <button className=" w-[175px] h-[56px] mt-2 bg-transparent border-1 border-gray-100 text-white rounded-[60px] flex items-center pl-4 font-mono relative">
        Get Started{" "}
        <div className="bg-[#646FC6] h-[44px] w-[44px]  rounded-full absolute flex justify-center items-center right-2">
          {" "}
          <img
            src=" arrow top right.png"
            alt=""
            className=" w-[20px] h-[20px]"
          />
        </div>
      </button>
    </div>
  );
}

export default ShipxNav

