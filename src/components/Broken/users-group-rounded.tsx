import * as React from "react";
import type { SVGProps } from "react";
const SvgUsersGroupRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={9} cy={6} r={4} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 9a3 3 0 1 0 0-6M5.89 20.584C6.825 20.85 7.882 21 9 21c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4c0 .345.077.68.22 1M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
      />
    </svg>
  );
};
export default SvgUsersGroupRounded;
