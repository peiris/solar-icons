import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611L3.99 13.602Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.806 7.194s-.541 2.806-3.674 5.939C10 16.265 7.194 16.806 7.194 16.806"
      />
    </svg>
  );
};
export default SvgPill;
