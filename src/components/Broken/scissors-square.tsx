import * as React from "react";
import type { SVGProps } from "react";
const SvgScissorsSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14.5 17.1 8 6m10 10.2c0 .994-.84 1.8-1.875 1.8-1.036 0-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8c1.035 0 1.875.806 1.875 1.8ZM9.5 17.1 16 6M6 16.2c0 .994.84 1.8 1.875 1.8 1.036 0 1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8C6.839 14.4 6 15.206 6 16.2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgScissorsSquare;
