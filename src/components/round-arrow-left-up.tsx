import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundArrowLeftUp = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="M15 15 9 9m0 0h4.5M9 9v4.5" />
    </svg>
  );
};
export default SvgRoundArrowLeftUp;
