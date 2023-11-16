import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13.294 7.17 12 12l-1.294 4.83"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor"  />
    </svg>
  );
};
export default SvgSlashCircle;
