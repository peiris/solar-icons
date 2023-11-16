import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.434 5.434 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928v.265Z" />
      <path d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448" />
    </svg>
  );
};
export default SvgWaterdrop;
