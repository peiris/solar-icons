import * as React from "react";
import type { SVGProps } from "react";
const SvgReply2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m4.5 12 5 5m-5-5 5-5m-5 5h10c1.667 0 5-1 5-5" />
    </svg>
  );
};
export default SvgReply2;
