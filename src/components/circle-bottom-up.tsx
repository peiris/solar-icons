import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleBottomUp = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m3 21 8-8m0 0H5m6 0v6M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" />
    </svg>
  );
};
export default SvgCircleBottomUp;
