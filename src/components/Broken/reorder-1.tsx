import * as React from "react";
import type { SVGProps } from "react";
const SvgReorder1 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M19 10h-8m-6 0h2M5 18h8m6 0h-2M19 14H5M19 6H5"
      />
    </svg>
  );
};
export default SvgReorder1;
