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
        
        d="M16.95 20.573S16.01 13.983 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073m.527 17.39c1.482-4.47 8.875-9.424 14.286-8.237m-5.45-9.371C14.927 7.63 7.675 12.512 2.29 11.452"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBasketball;
