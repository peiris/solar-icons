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
        strokeWidth={1.5}
        d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 20h7m0-8h-5m5-8h-3M12 4H5m5 8H5m0 8h2.667"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTuning4;
