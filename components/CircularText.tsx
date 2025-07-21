"use client"

import { useEffect, useRef } from "react"

export function CircularText() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const text = "symfony, next.js and react."

    const handleScroll = () => {
      if (svgRef.current) {
        const rotation = -window.pageYOffset / 6
        svgRef.current.style.transform = `rotate(${rotation}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const text = "symfony, next.js and react."
  const radius = 500
  const circumference = 2 * Math.PI * radius
  
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -skew-x-[30deg] pointer-events-none -z-10 opacity-[3%]">
      <svg 
        ref={svgRef}
        width="1500" 
        height="1500" 
        viewBox="0 0 1500 1500"
        className="h-[90vh] xl:h-[150vh] w-[90vh] xl:w-[150vh]"
        style={{ transformOrigin: 'center center' }}
      >
        <defs>
          <path
            id="circle-path"
            d={`M 750,750 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text 
          fontSize="220"
          fontWeight="bold" 
          fill="#0737FF"
          className="font-bold"
        >
          <textPath href="#circle-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}