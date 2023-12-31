import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOnMapPerspective = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21 21 3 11m.5 10 8.5-5M17 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M21.121 21.121C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121m0 10.242C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879m18.242 0Zm0-10.242C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879m18.242 0Zm-18.242 0C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121m0-10.242Zm0 10.242Z"
      />
    </svg>
  );
};
export default SvgPointOnMapPerspective;
