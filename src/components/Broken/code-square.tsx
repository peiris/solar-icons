import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m15.5 9 .172.172c1.333 1.333 2 2 2 2.828 0 .828-.667 1.495-2 2.828L15.5 15M13.294 7.17 12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828 0 .828.667 1.495 2 2.828L8.5 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgCodeSquare;
