import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15 9 4-4M5 19l4-4M9 9 5 5M19 19l-4-4"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHelp;
