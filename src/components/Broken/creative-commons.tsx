import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommons = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M11 15.667A4.535 4.535 0 0 1 9.286 16C6.919 16 5 14.21 5 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333M19 15.667a4.535 4.535 0 0 1-1.714.333C14.919 16 13 14.21 13 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgCreativeCommons;
