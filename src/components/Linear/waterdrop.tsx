import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.434 5.434 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928v.265Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"
      />
    </svg>
  );
};
export default SvgWaterdrop;
