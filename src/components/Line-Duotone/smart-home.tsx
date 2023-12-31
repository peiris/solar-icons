import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHome = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14 22c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.04 6.874 2.52 7.823c-.317.58-.44 1.233-.488 2.177"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M11 22a9 9 0 0 0-9-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 22a6 6 0 0 0-6-6M5 22a3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default SvgSmartHome;
