import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForwardCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m13 8.071 3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"
      />
    </svg>
  );
};
export default SvgRewindForwardCircle;
