import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M17 10H7l3.438-3M7 14h10l-3.437 3" />
    </svg>
  );
};
export default SvgRoundTransferHorizontal;
