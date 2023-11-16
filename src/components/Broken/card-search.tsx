import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSearch = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14 4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v1M10 4C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h3M10 16H6"
      />
      <circle cx={18} cy={17} r={3} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m20.5 19.5 1 1M2 10h5m15 0H11"
      />
    </svg>
  );
};
export default SvgCardSearch;
