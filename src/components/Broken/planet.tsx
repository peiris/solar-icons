import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 5.07A8 8 0 1 1 5.07 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.83 14.926c-5.428 2.893-10.648 3.927-11.66 2.31-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573.798 1.275-1.26 3.817-4.829 6.253"
      />
    </svg>
  );
};
export default SvgPlanet;
