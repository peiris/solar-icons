import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketball = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.34 17C6.1 21.783 12.216 23.42 17 20.66a9.956 9.956 0 0 0 4.196-4.731 9.985 9.985 0 0 0-.536-8.93 9.985 9.985 0 0 0-7.465-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.95 20.573S16.01 13.982 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238M16.414 3.209c-1.488 4.42-8.74 9.303-14.125 8.243"
      />
    </svg>
  );
};
export default SvgBasketball;
