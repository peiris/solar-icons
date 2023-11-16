import * as React from "react";
import type { SVGProps } from "react";
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 22h12M9 2h12M9 22l2.4-8M15 2l-2.4 8"
      />
    </svg>
  );
};
export default SvgTextItalic;
