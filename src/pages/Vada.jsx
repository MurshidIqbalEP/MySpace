import React from "react";
import DonutCard from "../compononts/DonutCard";
import Donut1 from "../../public/donut1.png";
import Donut2 from "../../public/donut2.png";
import Donut3 from "../../public/donut3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

const Vada = () => {
    useGSAP(()=>{
      gsap.context(()=>{
        const secondState = Flip.getState(".second")
        const thirdState = Flip.getState(".third")

        const config = {
            rotate:-360,
            ease:"none",
            duration:1,
        }

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".section-1",
                start:"clamp(center center)",
                endTrigger:".third",
                end:"clamp(center top)",
                scrub:1,
                ease:"none"
            }
        })

        tl.add(Flip.fit(".donut",secondState,config))
        tl.add(Flip.fit(".donut",thirdState,config))
      })
    },[])
  return (
    <div>
      <section className="h-screen w-full relative bg-pink-300 section-1">
        <div className="flex justify-center  items-center  text-[19rem] font-bold text-white uppercase h-screen">
          <h1>Dou</h1>
          <h1 className="z-50">nts</h1>

          <img
            src="pinkDonut.png"
            alt="pink"
            className="donut absolute top-[27%] w-auto h-auto "
          />
        </div>
      </section>

      <section className="flex h-screen w-full">
        <div className="flex-1/2  flex justify-center items-center">
          <div className="w-[350px] h-[350px] rounded-full bg-amber-200 second"></div>
        </div>

        <div className="flex-1/2 flex flex-col justify-center  text-left gap-2 text-yellow-700">
          <h1 className="text-6xl font-bold"> Donut Worry, Be Happy! </h1>
          <p className="text-xl font-medium">
            A perfect circle of joy — soft, fluffy, and glazed to perfection.
            Whether sprinkled, frosted, or filled, every bite of this donut is a
            sweet escape from the ordinary.
          </p>
        </div>
      </section>

      <section className="h-screen w-full flex justify-center items-center ">
        <div className="grid grid-cols-3 gap-14">
          <DonutCard
            img={Donut1}
            i={1}
            title="Strawberry Bliss"
            description="Soft, fluffy, and bursting with sweet strawberry glaze — a perfect treat for your taste buds."
          />
          <DonutCard
            img={Donut2}
            i={2}
            title="Chocolate Dream"
            description="Rich chocolate icing over a warm, pillowy donut for true cocoa lovers."
          />
          <DonutCard
            img={Donut3}
            i={3}
            title="Classic Glazed"
            description="The timeless classic — golden brown with a silky glaze that melts in your mouth."
          />
        </div>
      </section>
    </div>
  );
};

export default Vada;
