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
        
        d="M5.38 5.38c-2.128 2.13-2.993 5.194-3.27 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844 27.13 27.13 0 0 1-.023 4.612M13.457 2.11l8.433 8.433M13.457 2.11c-1.489.143-3.026.443-4.457.992m12.89 7.44c-.277 2.884-1.142 5.949-3.27 8.077m-8.077 3.271c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844 27.141 27.141 0 0 1 .023-4.612m8.433 8.433L2.11 13.457m8.433 8.433c1.489-.143 3.026-.443 4.457-.992M15.31 8.69l-6.62 6.62m0-2.837 2.837 2.837m-.945-4.728 2.836 2.836m-.945-4.728 2.837 2.837"
      />
    </svg>
  );
};
export default SvgRugby;
