import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.53 5.47a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM5.47 6.53l12 12 1.06-1.06-12-12-1.06 1.06Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 9v9H9"
      />
    </svg>
  );
};
export default SvgArrowRightDown;
