import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSearch = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 14v-2c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4M7 4V2.5M17 4V2.5"
      />
      <circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.5 20.5 22 22M21.5 9H10.75M2 9h3.875"
      />
    </svg>
  );
};
export default SvgCalendarSearch;
