import * as React from "react";
import type { SVGProps } from "react";
const SvgConfoundedCircle = (props: SVGProps<SVGSVGElement>) => {
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
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m8 12 2-1.5L8 9M16 12l-2-1.5L16 9M15 16l-1-1-1 1-1-1-1 1-1-1-1 1"
      />
    </svg>
  );
};
export default SvgConfoundedCircle;
