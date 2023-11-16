import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 10H4l5.5-6M4 14h16l-5.5 6" />
    </svg>
  );
};
export default SvgTransferHorizontal;
