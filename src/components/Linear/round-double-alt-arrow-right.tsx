import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundDoubleAltArrowRight = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m8.5 9 3 3-3 3M12.5 9l3 3-3 3"
      />
    </svg>
  );
};
export default SvgRoundDoubleAltArrowRight;
