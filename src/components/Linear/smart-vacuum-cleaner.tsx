import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartVacuumCleaner = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 18v-2"
      />
    </svg>
  );
};
export default SvgSmartVacuumCleaner;
