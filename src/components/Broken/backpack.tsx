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
        strokeLinecap="round"
        
        d="M21 10.73V16.375a4.519 4.519 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.519 4.519 0 0 1 3 16.376V10.73a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.078 0l.167.037.176.04A5.99 5.99 0 0 1 19.632 7M17.5 15.5V17"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        
        d="M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.148 22.148 0 0 0 5 1.546M21 14a22.154 22.154 0 0 1-9 1.91M10 13h4"
      />
    </svg>
  );
};
export default SvgBackpack;
