import * as React from "react";
import type { SVGProps } from "react";
const SvgDisplay = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 9c0-2.828 0-4.243.879-5.121C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.879C22 4.757 22 6.172 22 9v1c0 2.828 0 4.243-.879 5.121C20.243 16 18.828 16 16 16H8c-2.828 0-4.243 0-5.121-.879C2 14.243 2 12.828 2 10V9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 19v-2.5m0 2.5 6 2m-6-2-6 2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDisplay;
