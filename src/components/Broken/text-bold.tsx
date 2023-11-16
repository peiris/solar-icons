import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5 12h7a5 5 0 0 0 0-10H7.609A2.609 2.609 0 0 0 5 4.609V12Zm0 0h9a5 5 0 0 1 0 10H7.059C5.922 22 5 21.137 5 20m0-8v3.97"
      />
    </svg>
  );
};
export default SvgTextBold;
