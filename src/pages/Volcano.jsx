import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Volcano = () => {
  const totalFrames = 491;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(1);

  useEffect(() => {
    const imgArray = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/frame_${i.toString().padStart(4, "0")}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoaded(true);
          setImages(imgArray);
        }
      };
      imgArray.push(img);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const scaleCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.scale(dpr, dpr);
      
    };

    scaleCanvas();
    window.addEventListener("resize", scaleCanvas);
    return () => window.removeEventListener("resize", scaleCanvas);
  }, []);

  const renderCanvas = (frame) => {
    const context = canvasRef.current?.getContext("2d");
    if (!context || !images[frame - 1]) return;

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    context.drawImage(
      images[frame - 1],
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  useGSAP(() => {
    if (!loaded) return;

    const obj = { frame: 1 };
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    renderCanvas(1);

    let prevFrame = -1;
    let isHeadingVisible = true;
    let isDetailsVisible = false;

    gsap.to(obj, {
      frame: totalFrames,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 7}`,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;


          const currentFrame = Math.floor(obj.frame);
          if (currentFrame !== prevFrame) {
            frameRef.current = currentFrame;
            renderCanvas(currentFrame);
            prevFrame = currentFrame;
          }

      
          if (progress < 0.1 && !isHeadingVisible) {
            gsap.to("#Textss", {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              pointerEvents: "auto",
            });
            isHeadingVisible = true;
          } else if (progress >= 0.1 && isHeadingVisible) {
            gsap.to("#Textss", {
              opacity: 0,
              y: -40,
              duration: 0.4,
              ease: "power2.in",
              pointerEvents: "none",
            });
            isHeadingVisible = false;
          }

          
          if (progress >= 0.8 && !isDetailsVisible) {
            gsap.to("#volcanoDetails", {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              pointerEvents: "auto",
            });
            isDetailsVisible = true;
          } else if (progress < 0.8 && isDetailsVisible) {
            gsap.to("#volcanoDetails", {
              opacity: 0,
              y: -40,
              duration: 0.4,
              ease: "power2.in",
              pointerEvents: "none",
            });
            isDetailsVisible = false;
          }
        },
      },
    });
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-black relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 pointer-events-none will-change-transform"
      />

      <div
        id="Textss"
        className="absolute top-[20%] w-full text-center text-white z-10 transition-all duration-500 opacity-100"
      >
        <h1 className="text-3xl  lg:text-8xl  zen-dots-regular drop-shadow-lg">
          Volcano Eruption
        </h1>
      </div>

      <div
        id="volcanoDetails"
        className="absolute bottom-[20%] w-full zen-dots-regular text-center text-white px-4 z-10 opacity-0 "
      >
        <h2 className="text-2xl lg:text-5xl font-bold mb-4">
          Mount Nyiragongo Volcano
        </h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Mount Nyiragongo, located in the Democratic Republic of Congo, is one
          of the world's most dangerous volcanoes, known for its massive lava
          lake and extremely fast-flowing lava. Its eruptions can reach speeds
          of up to 60 km/h, posing a serious threat to nearby communities.
        </p>
      </div>
    </div>
  );
};

export default Volcano;
