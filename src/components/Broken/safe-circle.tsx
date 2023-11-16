import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 8v1m0 7v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m16 10 1-1M11 15l1-1M12 10l-1-1M17 15l-1-1M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgSafeCircle;
