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
        d="M5.033 10.783a6 6 0 1 0 8.92 4.46 7.503 7.503 0 0 1-8.92-4.46ZM15.387 14.694c.074.424.113.86.113 1.306 0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558 7.527 7.527 0 0 1-3.58 3.91Z"
      />
    </svg>
  );
};
export default SvgFilters;
