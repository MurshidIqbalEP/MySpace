import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MentorsLst = () => {

  useGSAP(()=>{
     gsap.timeline({
      scrollTrigger:{
        trigger:".lastSection",
        start:"top center",
        end:"top top",
        scrub:1,
      }
     }).from(".triggerclass",{
      y:40,
      opacity:0,
      duration:1,
      ease:"sine.inOut"
     }).from(".triggerbtn",{
         y:40,
      opacity:0,
      duration:1,
      ease:"sine.inOut"
     })
  },[])
  return (
    <div className="w-full h-[700px] px-[210px] flex gap-20">
      <div className="w-1/2 pt-[170px] lastSection">
        <button className="w-[154px] h-[38px] bg-[#F5F2FF] text-[#5D38DE] rounded-3xl font-semibold cursor-pointer triggerbtn">
          Become a Mentor
        </button>

        <h1 className='font-semibold  text-[48px] text-left triggerclass'>Join Our Team - <br /> Inspire Learners Today!</h1>
        <p className="triggerclass">Become a part of our passionate educator community and share <br />
        your expertise with learners worldwide. As an instructor,you'll <br />
        create engaging courses. guide students, and help shape their <br />
        personal and professional success</p>

         <button className="w-[154px] h-[56px] bg-[#5D38DE] text-white rounded-3xl mt-8 font-semibold cursor-pointer triggerbtn">
         Join our team
        </button>
      </div>
       
      
      <div>
        <img className="mt-[90px]" src="man.png" alt="maaaan" />
      </div>
    </div>
  );
};

export default MentorsLst;
