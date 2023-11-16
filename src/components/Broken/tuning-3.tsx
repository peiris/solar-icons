import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning3 = (props: SVGProps<SVGSVGElement>) => {
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
        r={2}
        stroke="currentColor"
        
        transform="rotate(180 12 12)"
      />
      <circle
        cx={20}
        cy={14}
        r={2}
        stroke="currentColor"
        
        transform="rotate(180 20 14)"
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        
        transform="matrix(-1 0 0 1 6 8)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4 12v2.75M4 19v-1.5M20 12V9.25M20 5v1.5M12 19v-5M20 19v-3M4 5v2.667M12 10V7.5M12 5v.5"
      />
    </svg>
  );
};
export default SvgTuning3;
