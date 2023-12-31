import * as React from "react";
import type { SVGProps } from "react";
const SvgPallete2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934 1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"
      />
      <circle
        cx={17.5}
        cy={11.5}
        r={1.5}
        stroke="currentColor"
        
        opacity={0.5}
      />
      <circle
        cx={6.5}
        cy={11.5}
        r={1.5}
        stroke="currentColor"
        
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M11 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPallete2;
