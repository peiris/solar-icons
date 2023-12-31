import * as React from "react";
import type { SVGProps } from "react";
const SvgBagSmile = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7.19.13.367.276.53.435.888.865 1.157 2.208 1.694 4.894.771 3.856 1.157 5.784.269 7.15-.16.248-.348.477-.56.683C18.75 21 16.785 21 12.853 21h-1.703c-3.933 0-5.899 0-7.065-1.138a3.998 3.998 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 6V5a3 3 0 1 1 6 0v1M9.17 15a3.001 3.001 0 0 0 5.66 0"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBagSmile;
