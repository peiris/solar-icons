import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCross = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <circle cx={10} cy={6} r={4} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20.414 11.414 19 10m0 0-1.414-1.414M19 10l1.414-1.414M19 10l-1.414 1.414M17.998 18c.002-.164.002-.331.002-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"
      />
    </svg>
  );
};
export default SvgUserCross;
