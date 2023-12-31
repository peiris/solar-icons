import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning4 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17.5 20H19m-7 0h2.75M6.5 4H5m7 0H9.25M19 12h-5M19 4h-3M5 20h2.667M10 12H7.5m-2 0H5"
      />
    </svg>
  );
};
export default SvgTuning4;
