import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundGraph = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 0 1 3-7.141" />
      <path d="M5 12a7 7 0 1 0 7-7" />
      <path d="M12 16a4 4 0 0 0 0-8" />
    </svg>
  );
};
export default SvgRoundGraph;
