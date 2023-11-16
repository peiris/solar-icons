import * as React from "react";
import type { SVGProps } from "react";
const SvgReply = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m4.5 12 5-5m-5 5 5 5m-5-5h10c1.667 0 5 1 5 5"
      />
    </svg>
  );
};
export default SvgReply;
