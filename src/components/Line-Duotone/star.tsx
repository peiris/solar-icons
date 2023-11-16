import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17.657 6.343 15.96 8.04m-7.92 7.92-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92 1.697 1.697"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgStar;
