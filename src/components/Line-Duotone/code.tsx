import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m17 7.83 1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974 0 .89-.771 1.585-2.314 2.973L17 16.83"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m13.987 5-3.974 14.83"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 7.83 5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33c0 .89.771 1.585 2.314 2.973L7 16.83"
      />
    </svg>
  );
};
export default SvgCode;
