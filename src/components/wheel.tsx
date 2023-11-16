import * as React from "react";
import type { SVGProps } from "react";
const SvgWheel = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={6} />
      <circle cx={12} cy={12} r={2} />
      <path d="M6 12h4M14 12h4M9 17.196l2-3.464M13 10.268l2-3.464M15 17.196l-2-3.464M11 10.268 9 6.804" />
    </svg>
  );
};
export default SvgWheel;
