import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M9 12h6M9 18H8A6 6 0 0 1 8 6h1M15 6h1a6 6 0 0 1 0 12h-1" />
    </svg>
  );
};
export default SvgLinkMinimalistic;
