import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboard = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m2 7 .813 1.219A4 4 0 0 0 6.14 10H12m10-3-.812 1.219A4 4 0 0 1 17.859 10H16"
      />
      <circle cx={7} cy={15} r={2} stroke="currentColor"  />
      <circle cx={17} cy={15} r={2} stroke="currentColor"  />
    </svg>
  );
};
export default SvgSkateboard;
