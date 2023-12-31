import * as React from "react";
import type { SVGProps } from "react";
const SvgCondicioner2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11c0 3.771 0 5.657-1.172 6.828C19.657 19 17.771 19 14 19h-4c-3.771 0-5.657 0-6.828-1.172C2 16.657 2 14.771 2 11Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M18 18.5c0-1.404 0-2.107-.337-2.611a1.999 1.999 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6 11.5h12M6 9h12"
      />
    </svg>
  );
};
export default SvgCondicioner2;
