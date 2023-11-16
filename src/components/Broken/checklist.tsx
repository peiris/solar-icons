import * as React from "react";
import type { SVGProps } from "react";
const SvgChecklist = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 5.5 3.214 7 7.5 3M2 12.5 3.214 14 7.5 10M2 19.5 3.214 21 7.5 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12h-5m-5 0h1.5M12 19h5m3.5 0H22M22 5H12"
      />
    </svg>
  );
};
export default SvgChecklist;
