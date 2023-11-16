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
        
        d="M5 4.609A2.609 2.609 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5V4.609Z"
      />
      <path
        stroke="currentColor"
        
        d="M5 12h9a5 5 0 0 1 0 10H7.059A2.059 2.059 0 0 1 5 19.941V12Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTextBold;
