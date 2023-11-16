import * as React from "react";
import type { SVGProps } from "react";
const SvgFlame = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M7.37 8c.992-1.525 1.974-3.09 2.586-4.623.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15c0 1.174-.2 2.166-.53 3M5.466 11C4.613 12.454 4 13.813 4 15c0 3.107 2.246 5.309 4.081 6.372.421.243.83-.265.61-.698-.486-.953-.958-2.185-.958-3.174 0-1.371 1.045-2.473 1.792-3.18.191-.181.491-.179.657.026.308.38.616.862.924 1.252.181.228.518.208.677-.037.986-1.52 1.215-3.458 1.268-4.907.016-.438.528-.653.821-.328C15.156 11.746 16.8 14.05 16.8 16c0 1.816-1.018 3.746-1.898 5.012-.258.37.025.873.457.739a6.85 6.85 0 0 0 1.606-.74"
      />
    </svg>
  );
};
export default SvgFlame;
