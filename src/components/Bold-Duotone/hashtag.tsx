import * as React from "react";
import type { SVGProps } from "react";
const SvgHashtag = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M10.2 2.277c.4.111.634.525.523.924l-5 18a.75.75 0 0 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522ZM19.2 2.277c.4.111.634.525.523.924l-5 18a.75.75 0 1 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 9A.75.75 0 0 1 4 8.25h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9ZM1.25 16a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHashtag;
