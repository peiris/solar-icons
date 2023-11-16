import * as React from "react";
import type { SVGProps } from "react";
const SvgScreencast = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 20c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12v-1M2 8.5c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589C5.803 4 6.036 4 6.5 4H14c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 20a9 9 0 0 0-9-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 20a6 6 0 0 0-6-6M5 20a3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default SvgScreencast;
