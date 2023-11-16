import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => {
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
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        clipPath="url(#Route_svg__a)"
      >
        <path d="M19.071 4.929c3.333 3.333 5 5 5 7.07 0 2.072-1.667 3.739-5 7.072s-5 5-7.071 5c-2.071 0-3.738-1.667-7.071-5-3.333-3.334-5-5-5-7.071 0-2.071 1.667-3.738 5-7.071 3.333-3.334 5-5 7.071-5 1.377 0 2.575.737 4.204 2.21" />
        <path
          strokeLinejoin="round"
          d="M16 11.5 13.333 9M16 11.5 13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14"
        />
      </g>
      <defs>
        <clipPath id="Route_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgRoute;
