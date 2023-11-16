import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M5 4.609A2.609 2.609 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5V4.609ZM5 12h9a5 5 0 0 1 0 10H7.059A2.059 2.059 0 0 1 5 19.941V12Z" />
    </svg>
  );
};
export default SvgTextBold;
