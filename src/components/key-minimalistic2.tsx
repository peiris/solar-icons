import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={15} cy={9} r={7} />
      <circle cx={15} cy={9} r={2} />
      <path d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19" />
    </svg>
  );
};
export default SvgKeyMinimalistic2;
