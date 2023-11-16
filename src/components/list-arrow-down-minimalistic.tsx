import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDownMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 6H3M11 16H3M12 11H3M15 14.5l2.5 2.5m0 0 2.5-2.5M17.5 17V9" />
    </svg>
  );
};
export default SvgListArrowDownMinimalistic;
