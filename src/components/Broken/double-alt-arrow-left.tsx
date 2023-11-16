import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleAltArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13 19-6-7 1.5-1.75M13 5l-2 2.333M17 5l-6 7 1.5 1.75M17 19l-2-2.333"
      />
    </svg>
  );
};
export default SvgDoubleAltArrowLeft;
