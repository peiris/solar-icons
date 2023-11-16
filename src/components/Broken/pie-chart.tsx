import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 15.552A9.215 9.215 0 0 1 11.21 22a9.21 9.21 0 0 1-8.78-12m6.018-6A9.2 9.2 0 0 0 5 5.987"
      />
      <path
        stroke="currentColor"
        
        d="M21.913 9.947a11.352 11.352 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"
      />
    </svg>
  );
};
export default SvgPieChart;
