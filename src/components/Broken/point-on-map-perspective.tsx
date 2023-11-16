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
        strokeWidth={1.5}
        d="M2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879-.3.3-.498.662-.628 1.121M21 21l-3.764-2.091M3 11l11 6.111"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m3.5 21 6.358-3.74L12 16M17 13V8M16.5 2.041A3 3 0 1 1 14.041 4.5"
      />
    </svg>
  );
};
export default SvgPointOnMapPerspective;
