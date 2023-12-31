import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="#1C274D"
        
        d="M3 10.911v-.18a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.078 0l.167.037.176.04A6 6 0 0 1 21 10.91v5.464a4.519 4.519 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.519 4.519 0 0 1 3 16.376V10.91Z"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        
        d="M17.5 15.5V17M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5"
        opacity={0.5}
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        
        d="M3 14a22.16 22.16 0 0 0 18 0"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        
        d="M10 13h4"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBackpack;
