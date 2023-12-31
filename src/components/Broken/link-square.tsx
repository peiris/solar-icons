import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6c2.828 0 4.243 0 5.121.879C14 7.757 14 9.172 14 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18c2.828 0 4.243 0 5.121-.879.3-.3.498-.662.628-1.121M22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6"
      />
    </svg>
  );
};
export default SvgLinkSquare;
