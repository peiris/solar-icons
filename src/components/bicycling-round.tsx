import * as React from "react";
import type { SVGProps } from "react";
const SvgBicyclingRound = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={14} cy={4} r={2} />
      <circle cx={6} cy={18} r={3} />
      <circle cx={18} cy={18} r={3} />
      <path d="M18.5 10h-3.918c-.377 0-.742-.128-1.037-.363L11.386 7.92A2.638 2.638 0 1 0 8.69 12.4l3.09 1.349a1.89 1.89 0 0 1 .982 2.477L12 18" />
    </svg>
  );
};
export default SvgBicyclingRound;
