import * as React from "react";
import type { SVGProps } from "react";
const SvgSleepingCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1"
      />
      <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m17 4 3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 5.523-4.477 10-10 10a9.955 9.955 0 0 1-5-1.338M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5"
      />
    </svg>
  );
};
export default SvgSleepingCircle;
