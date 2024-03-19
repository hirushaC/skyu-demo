import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../../public/lotties/hloader.json"

const Lloader = ({className}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
        speed: 0.1,
      };
      
  return (
    <div className={className}><Lottie options={defaultOptions} animationData={animationData} /></div>
    
  )
}

export default Lloader