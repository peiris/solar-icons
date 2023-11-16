import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophoneLarge = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0V8Z" />
      <path d="M10 6.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M10 9.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M21 11v2a9 9 0 1 1-18 0v-2" />
    </svg>
  );
};
export default SvgMicrophoneLarge;
