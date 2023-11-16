import * as React from "react";
import type { SVGProps } from "react";
const SvgSsdRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21.553 15.481c-.6-1.13-1.742-1.893-3.053-1.893h-13c-1.311 0-2.454.764-3.053 1.893m19.106 0A3.86 3.86 0 0 1 22 17.294C22 19.341 20.433 21 18.5 21H12m9.553-5.519L20.277 10.3M2.447 15.48 5 5.118C5.5 3.529 6.395 3 7.5 3h9c1.105 0 2 .53 2.5 2.118l.32 1.295M2.446 15.481A3.859 3.859 0 0 0 2 17.294C2 19.341 3.567 21 5.5 21H8M18 17v1M15.5 17v1M13 17v1M10.5 17v1"
      />
    </svg>
  );
};
export default SvgSsdRound;
