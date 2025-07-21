"use client"

import { useEffect, useRef } from "react"
import { CIRCULAR_TEXT, ANIMATION_CONSTANTS } from "@/lib/constants"

export function CircularText() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const rotation = -window.pageYOffset / ANIMATION_CONSTANTS.SCROLL_ROTATION_DIVISOR
        svgRef.current.style.transform = `rotate(${rotation}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
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
            d={`M 750,750 m -${CIRCULAR_TEXT.RADIUS},0 a ${CIRCULAR_TEXT.RADIUS},${CIRCULAR_TEXT.RADIUS} 0 1,1 ${CIRCULAR_TEXT.RADIUS * 2},0 a ${CIRCULAR_TEXT.RADIUS},${CIRCULAR_TEXT.RADIUS} 0 1,1 -${CIRCULAR_TEXT.RADIUS * 2},0`}
          />
        </defs>
        <text 
          fontSize="220"
          fontWeight="bold" 
          fill="#0737FF"
          className="font-bold"
        >
          <textPath href="#circle-path" startOffset="0%">
            {CIRCULAR_TEXT.TEXT}
          </textPath>
        </text>
      </svg>
    </div>
  )
}