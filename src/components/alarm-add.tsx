import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmAdd = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={13} r={9} />
      <path d="M15 13h-3m0 0H9m3 0v-3m0 3v3M3.5 4.5l4-2.5M20.5 4.5l-4-2.5" />
    </svg>
  );
};
export default SvgAlarmAdd;
