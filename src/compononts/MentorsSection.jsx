import { ArrowRight, Clock, Users } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MentorsSection = () => {
  useGSAP(()=>{
     gsap.timeline({
      scrollTrigger:{
        trigger:".section1",
        start:"top 80%",
        end:"top 20%",
        scrub:1,
      }
     }).from(".card1",{
      x: "-70%",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
     }).from(".card2",{
        x: "70%",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
     },
    "<")
  },[])
  return (
    <div className="w-full h-[700px] flex flex-col justify-center items-center text-center bg-gray-200 ">
      <button className="w-[134px] h-[38px] bg-[#F5F2FF] text-[#5D38DE] rounded-3xl font-semibold section1" >
        Our Team
      </button>
      <h1 className="text-[48px] font-semibold">Learn from industry Experts</h1>
      <p>
        Gain insights from industry experts and master real-world skills for
        career <br /> growth and professional development
      </p>

      <div className="flex gap-2 mt-5">
        <div className="flex w-[540px] h-[230px] items-center gap-6 rounded-2xl bg-white p-6 shadow-sm card1">
          <img
            src="lady.png"
            alt="Sophie Johnson"
          />
          <div className="flex flex-1 flex-col text-left justify-between py-1">
            <div>
              <h2 className="text-2xl font-semibold text-[#6C2BD9]">
                Sophie Johnson
              </h2>
              <p className="mt-0.5 text-sm text-gray-600">
                Data Analyst Mentor
              </p>
            </div>

            <div className="mt-5 flex items-center">
              <div className="flex flex-col items-start">
                <p className="text-xl font-semibold">20M+</p>
                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>Watch time</span>
                </div>
              </div>
              <div className="mx-6 h-10 w-px bg-gray-300" />

              <div className="flex flex-col items-start">
                <p className="text-xl font-semibold">10K+</p>
                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <Users size={14} />
                  <span>Followers</span>
                </div>
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 font-medium text-[#6C2BD9] hover:underline">
              View profile <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex w-[540px] h-[230px] items-center gap-6 rounded-2xl bg-white p-6 shadow-sm card2">
          <img
            src="male.png"
            alt="Colin"
          />
          <div className="flex flex-1 flex-col text-left justify-between py-1">
            <div>
              <h2 className="text-2xl font-semibold text-[#6C2BD9]">
                Colin Murno
              </h2>
              <p className="mt-0.5 text-sm text-gray-600">
                AI/ML Expert Mentor
              </p>
            </div>

            <div className="mt-5 flex items-center">
              <div className="flex flex-col items-start">
                <p className="text-xl font-semibold">35M+</p>
                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>Watch time</span>
                </div>
              </div>
              <div className="mx-6 h-10 w-px bg-gray-300" />

              <div className="flex flex-col items-start">
                <p className="text-xl font-semibold">12K+</p>
                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <Users size={14} />
                  <span>Followers</span>
                </div>
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 font-medium text-[#6C2BD9] hover:underline">
              View profile <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <button className="w-[134px] h-[38px] bg-[#5D38DE] text-white rounded-3xl font-semibold mt-6">See all</button>
    </div>
  );
};

export default MentorsSection;
