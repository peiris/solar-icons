import * as React from "react";
import type { SVGProps } from "react";
const SvgSortByTime = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M10 7H2M8 12H2M10 17H2" />
      <circle cx={17} cy={12} r={5} />
      <path d="M17 10v1.846L18 13" />
    </svg>
  );
};
export default SvgSortByTime;
