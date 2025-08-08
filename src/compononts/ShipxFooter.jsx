import React from "react";

const ShipxFooter = () => {
  return (
    <div className="w-full h-[900px] bg-[#25252D] relative overflow-hidden flex flex-col  items-center text-center gap-10">
      <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat bg-center bg-[length:400px_900px] opacity-6 z-0"></div>
      <div className="absolute top-[400px] left-[-100px] w-[300px] h-[300px] bg-[#646FC6] rounded-full blur-[100px]  opacity-50 z-0"></div>
      <div className="absolute top-[400px] right-[-100px] w-[300px] h-[300px] bg-[#646FC6] rounded-full blur-[100px] opacity-50 z-10"></div>

      <div className=" flex gap-3 -ml-15 ">
        <img src="shipximg4.png" alt="" />
        <img src="shipximg1.png" alt="" />
        <img src="shipximg2.png" alt="" />
        <img src="shipximg3.png" alt="" />
        <img src="shipximg4.png" alt="" />
        <img src="shipximg5.png" alt="" />
      </div>

      <h1 className="text-5xl font-medium text-white z-10 ">
        Smart shipping made <br /> simple with full <br /> flexibility & control
      </h1>
      <div className="flex gap-5 mt-6">
        <button className=" w-[190px] h-[56px] bg-[#646FC6] text-white rounded-[60px] flex items-center pl-8 font-sans relative">
          Join Waitlist{" "}
          <div className="bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2">
            {" "}
            <img src="arrow.png" alt="" />
          </div>
        </button>
        <button className=" w-[186px] h-[56px] bg-white/10 text-white  backdrop-blur-xs rounded-[60px] flex items-center pl-3 font-sans relative">
          {" "}
          <span className="flex flex-col text-left -space-y-2">
            {" "}
            <p className="text-sm font-extralight">For address</p>{" "}
            <p>Speak with us</p>{" "}
          </span>{" "}
          <div className="bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2 flex justify-center items-center">
            {" "}
            <img src="sms.png" alt="" />
          </div>
        </button>
      </div>

      <div className="flex gap-3 ">
        <div className="h-[275px] w-[354px] bg-white/10  rounded-[16px] text-left p-4 flex flex-col justify-between">
           <img src="shipxlogo.png" alt="logo" className="w-[125px] h-[50px]" />
           <p className="text-lg text-white ml-4">Where every shipment moves with <br /> purpose</p>
           <img src="shipxlinks.png" alt="" className="w-[140px] h-[40px] ml-4" />
        </div>

        <div className="h-[275px] w-[280px] bg-white/10  rounded-[16px] text-left p-6 flex flex-col  gap-16">
           <h1 className="text-white">ShipX</h1>
           <div className="text-white text-2xl">
             <p>Home</p>
             <p>Aboute us</p>
             <p>Solutions</p>
             <p>Features</p>
           </div>
        </div>
        <div className="h-[275px] w-[354px] bg-white/10  rounded-[16px] text-left p-6 flex flex-col  gap-4 text-white">
          <h1 >Newsletter</h1>
          <h1 className=" text-[28px]">Subscribe for monthly <br />updates</h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm">E-mail Address</p>
            <input type="text"  className="bg-white/10 rounded-2xl h-[50px] w-[290px] p-4" placeholder="Enter your Email"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipxFooter;
