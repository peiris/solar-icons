import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkBroken = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m2 8 6 2M6 4l2 3M11 6.563l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517 1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587 10.965 20c-1.392 1.524-3.876 1.277-5.548-.552-1.67-1.828-1.897-4.546-.504-6.07L6.173 12"
      />
    </svg>
  );
};
export default SvgLinkBroken;
