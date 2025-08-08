import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const MentorsMousecatcher = () => {
    useGSAP(()=>{
        window.addEventListener('mousemove',(event)=>{
               gsap.to("#star",{
                x:event.clientX,
                y:event.clientY,
                rotate: "+=50",
                delay:0.5,
                ease:"slow(0.9,0.7,false)",
               })
               
        })
    },[])

  return (
    <img src="3d.png" alt="3d"  className='fixed top-0 left-0 w-[80px] h-[80px] z-50' id="star" />
  )
}

export default MentorsMousecatcher