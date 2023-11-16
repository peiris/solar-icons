import * as React from "react";
import type { SVGProps } from "react";
const SvgBombMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={9.5}
        cy={14.5}
        r={7.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m17 7-2 2"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m19.5 7.5 1 .5M16 3.5l.5 1M19 5l1-1"
      />
    </svg>
  );
};
export default SvgBombMinimalistic;
