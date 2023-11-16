import * as React from "react";
import type { SVGProps } from "react";
const SvgStretchingRound = (props: SVGProps<SVGSVGElement>) => {
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
        cx={14.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 21.996v-3.947c0-1.776-1.605-3.13-3.373-2.844m-7.679-1.77-.025-.024c-1.042-1.007-.237-2.626.67-3.268.907-.643 4.752-1.643 4.752 3.291a8.746 8.746 0 0 1-1.302 4.615M5 22c1.46 0 2.82-.374 4-1.032"
      />
    </svg>
  );
};
export default SvgStretchingRound;
