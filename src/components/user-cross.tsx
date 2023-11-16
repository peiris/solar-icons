import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCross = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} />
      <path d="M15 13.327A13.57 13.57 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5" />
      <circle cx={18} cy={16} r={4} />
      <path d="m16.667 14.667 2.666 2.666m0-2.666-2.666 2.666" />
    </svg>
  );
};
export default SvgUserCross;
