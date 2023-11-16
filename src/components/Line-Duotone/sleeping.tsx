import * as React from "react";
import type { SVGProps } from "react";
const SvgSleeping = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 6v12M22 18v-2.357c0-1.995 0-2.993-.28-3.794A5 5 0 0 0 18.65 8.78C17.85 8.5 16.852 8.5 14.857 8.5c-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"
      />
      <path
        stroke="currentColor"
        
        d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSleeping;
