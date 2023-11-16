import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipNext = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.737 2 21.277 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648l10.79 6.968Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 5v14"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSkipNext;
