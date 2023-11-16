import * as React from "react";
import type { SVGProps } from "react";
const SvgFilters = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z" />
      <path d="M6.5 10.189a6 6 0 1 0 7.106 3.669" />
      <path d="M12 20.472a6 6 0 1 0 5.5-10.283" />
    </svg>
  );
};
export default SvgFilters;
