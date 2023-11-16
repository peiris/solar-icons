import * as React from "react";
import type { SVGProps } from "react";
const SvgInfinity = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 8A5 5 0 0 0 4 16M14 16a5 5 0 0 0 6-8M7 17c2.761 0 3.5-2 5-5s2.239-5 5-5"
      />
    </svg>
  );
};
export default SvgInfinity;
