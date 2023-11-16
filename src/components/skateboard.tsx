import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboard = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7" />
      <circle cx={7} cy={15} r={2} />
      <circle cx={17} cy={15} r={2} />
    </svg>
  );
};
export default SvgSkateboard;
