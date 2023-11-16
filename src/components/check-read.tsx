import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckRead = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m4 12.9 3.143 3.6L15 7.5M20 7.563l-8.572 9L11 16" />
    </svg>
  );
};
export default SvgCheckRead;
