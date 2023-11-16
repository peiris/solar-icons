import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDownMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 6H3M11 16H3M12 11H3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 14.5 2.5 2.5m0 0 2.5-2.5M17.5 17V9"
      />
    </svg>
  );
};
export default SvgListArrowDownMinimalistic;
