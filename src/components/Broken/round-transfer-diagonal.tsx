import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferDiagonal = (props: SVGProps<SVGSVGElement>) => {
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
        d="m6.5 4 7.378 8V7.5M17.378 19.878l-7.5-7.879v4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"
      />
    </svg>
  );
};
export default SvgRoundTransferDiagonal;
