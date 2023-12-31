import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnetWave = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11c-1.488 0-2.891.36-4.127 1m7.571-1v4.5m0 0h-3.5A4.5 4.5 0 0 0 7.59 15m6.854 1.5H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5h-3.5m3.5 0V21m0 0H11A9 9 0 0 1 3.516 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6M19.5 9s.5.9.5 3-.5 3-.5 3"
      />
    </svg>
  );
};
export default SvgMagnetWave;
