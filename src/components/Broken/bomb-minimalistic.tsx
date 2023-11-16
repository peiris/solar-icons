import * as React from "react";
import type { SVGProps } from "react";
const SvgBombMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="m17 7-2 2M19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"
      />
    </svg>
  );
};
export default SvgBombMinimalistic;
