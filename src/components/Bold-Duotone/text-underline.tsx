import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 3a1 1 0 0 0-2 0v6a9 9 0 1 0 18 0V3a1 1 0 1 0-2 0v6A7 7 0 1 1 5 9V3Z"
        opacity={0.5}
      />
      <path fill="currentColor" d="M4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z" />
    </svg>
  );
};
export default SvgTextUnderline;
