import * as React from "react";
import type { SVGProps } from "react";
const SvgForward2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m19.5 12-5 5m5-5-5-5m5 5h-10c-1.667 0-5-1-5-5" />
    </svg>
  );
};
export default SvgForward2;
