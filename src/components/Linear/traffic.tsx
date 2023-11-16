import * as React from "react";
import type { SVGProps } from "react";
const SvgTraffic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12A10 10 0 1 1 12 2M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185"
      />
    </svg>
  );
};
export default SvgTraffic;
