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
        strokeLinecap="round"
        
        d="M22 10V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879-.3.3-.498.662-.628 1.121M2 9v1c0 2.828 0 4.243.879 5.121C3.757 16 5.172 16 8 16h8c2.828 0 4.243 0 5.121-.879.3-.3.498-.662.628-1.121M12 19v-2.5m0 2.5 6 2m-6-2-6 2"
      />
    </svg>
  );
};
export default SvgDisplay;
