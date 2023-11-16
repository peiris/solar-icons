import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06 1.06 12-12-1.06-1.06-12 12 1.06 1.06Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M9 6h9v9"
      />
    </svg>
  );
};
export default SvgArrowRightUp;
