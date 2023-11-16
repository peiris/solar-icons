import * as React from "react";
import type { SVGProps } from "react";
const SvgColourTuneing = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12h7.5M22 12h-7.5M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10 0-6.842-1.66-10-3.928-10-1.734 0-4 3-4 6.316"
      />
    </svg>
  );
};
export default SvgColourTuneing;
