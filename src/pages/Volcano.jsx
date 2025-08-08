import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Volcano = () => {
  const totalFrames = 491;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(1);

  // ✅ Load frames
  useEffect(() => {
    const imgArray = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/frame_${i.toString().padStart(4, '0')}.jpg`;
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

  // ✅ Lenis Smooth Scroll setup
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

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  // ✅ Scale canvas for device pixel ratio
  useEffect(() => {
    const scaleCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    scaleCanvas();
    window.addEventListener('resize', scaleCanvas);
    return () => window.removeEventListener('resize', scaleCanvas);
  }, []);

  // ✅ Render frame to canvas
  const renderCanvas = (frame) => {
    const context = canvasRef.current?.getContext('2d');
    if (!context || !images[frame - 1]) return;

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.drawImage(images[frame - 1], 0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  // ✅ GSAP animation with heading control
  useGSAP(() => {
    if (!loaded) return;

    const obj = { frame: 1 };
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    renderCanvas(1);

    let prevFrame = -1;
    let isHeadingVisible = true;

    gsap.to(obj, {
      frame: totalFrames,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000',
        scrub: true,
        pin: true,
      },
      onUpdate: () => {
        const currentFrame = Math.floor(obj.frame);
        if (currentFrame !== prevFrame) {
          frameRef.current = currentFrame;
          renderCanvas(currentFrame);
          prevFrame = currentFrame;

          // Show heading on frame 1
          if (currentFrame === 1 && !isHeadingVisible) {
            gsap.to("#Textss", {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
              pointerEvents: "auto",
            });
            isHeadingVisible = true;
          } else if (currentFrame !== 1 && isHeadingVisible) {
            gsap.to("#Textss", {
              opacity: 0,
              y: -40,
              duration: 0.4,
              ease: 'power2.in',
              pointerEvents: "none",
            });
            isHeadingVisible = false;
          }
        }
      },
    });
  }, [loaded]);

  return (
    <div ref={containerRef} className="h-screen w-full bg-black relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 pointer-events-none will-change-transform"
      />

      <div
        id="Textss"
        className="absolute top-[20%] w-full text-center text-white z-10 transition-all duration-500 opacity-100"
      >
        <h1 className="text-8xl  zen-dots-regular drop-shadow-lg">Volcano Eruption</h1>
      </div>
    </div>
  );
};

export default Volcano;
