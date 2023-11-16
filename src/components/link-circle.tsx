import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M14 12a6 6 0 1 1-6-6" />
      <path d="M10 12a6 6 0 1 1 6 6" />
    </svg>
  );
};
export default SvgLinkCircle;
