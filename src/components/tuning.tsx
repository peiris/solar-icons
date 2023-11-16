import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM16.959 9V2M6.959 15v7M16.959 22v-2M6.959 2v2" />
    </svg>
  );
};
export default SvgTuning;
