import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14.019 7.364a.75.75 0 0 0-1.449-.388l-2.588 9.66a.75.75 0 0 0 1.449.388l2.588-9.66Z"
      />
    </svg>
  );
};
export default SvgSlashCircle;
