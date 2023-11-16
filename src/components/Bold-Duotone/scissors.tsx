import * as React from "react";
import type { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303L6.654 1.633Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.346 1.633a.75.75 0 0 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303l8.914-15.854Z"
      />
    </svg>
  );
};
export default SvgScissors;
