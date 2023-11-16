import * as React from "react";
import type { SVGProps } from "react";
const SvgBombMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={9.5} cy={14.5} r={7.5} />
      <path d="m17 7-2 2M19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1" />
    </svg>
  );
};
export default SvgBombMinimalistic;
