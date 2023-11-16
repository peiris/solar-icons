import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleAltArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="m19 13-7-6-1.75 1.5M5 13l2.333-2M5 17l7-6 1.75 1.5M19 17l-2.333-2"
      />
    </svg>
  );
};
export default SvgDoubleAltArrowUp;
