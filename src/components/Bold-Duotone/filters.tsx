import * as React from "react";
import type { SVGProps } from "react";
const SvgFilters = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z" />
      <path
        fill="currentColor"
        d="M13.58 13.79a6.002 6.002 0 0 1-7.16-3.58 6 6 0 1 0 7.16 3.58Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M13.58 13.79c.271.684.42 1.43.42 2.21a5.985 5.985 0 0 1-2 4.472 6 6 0 1 0 5.58-10.262 6.014 6.014 0 0 1-4 3.58Z"
        opacity={0.4}
      />
    </svg>
  );
};
export default SvgFilters;
