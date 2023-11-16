import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0V9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 5v3"
      />
    </svg>
  );
};
export default SvgMouseMinimalistic;
