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
        d="M4.75 3a.75.75 0 0 0-1.5 0v6a8.75 8.75 0 1 0 17.5 0V3a.75.75 0 0 0-1.5 0v6a7.25 7.25 0 1 1-14.5 0V3ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"
      />
    </svg>
  );
};
export default SvgTextUnderline;
