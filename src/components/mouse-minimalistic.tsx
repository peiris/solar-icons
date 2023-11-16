import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0V9ZM12 5v3" />
    </svg>
  );
};
export default SvgMouseMinimalistic;
