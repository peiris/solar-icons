import * as React from "react";
import type { SVGProps } from "react";
const SvgSortFromTopToBottom = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 16h9M6 11h7M8 6h5M17 4v16l3-4" />
    </svg>
  );
};
export default SvgSortFromTopToBottom;
