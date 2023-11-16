import * as React from "react";
import type { SVGProps } from "react";
const SvgCup1 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586C17 4.172 17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12V7ZM17 13h1a4 4 0 0 0 0-8h-1"
      />
      <path
        stroke="currentColor"
        
        d="M17 13H3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 21H2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCup1;
