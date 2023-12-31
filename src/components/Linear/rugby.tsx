import * as React from "react";
import type { SVGProps } from "react";
const SvgRugby = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13.457 2.11c-2.883.277-5.948 1.142-8.076 3.27-2.13 2.13-2.994 5.194-3.271 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844 27.13 27.13 0 0 1-.023 4.612M13.457 2.11l8.433 8.433m0 0c-.277 2.883-1.142 5.948-3.27 8.076-2.13 2.13-5.194 2.994-8.077 3.271m0 0c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844 27.141 27.141 0 0 1 .023-4.612m8.433 8.433L2.11 13.457M15.31 8.69l-6.62 6.62m0-2.837 2.837 2.837m-.945-4.728 2.836 2.836m-.945-4.728 2.837 2.837"
      />
    </svg>
  );
};
export default SvgRugby;
