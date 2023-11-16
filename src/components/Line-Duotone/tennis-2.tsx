import * as React from "react";
import type { SVGProps } from "react";
const SvgTennis2 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M3.34 17C6.1 21.783 12.217 23.42 17 20.66a9.956 9.956 0 0 0 4.197-4.731 9.985 9.985 0 0 0-.537-8.93 9.985 9.985 0 0 0-7.464-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"
      />
      <path
        stroke="currentColor"
        strokeDasharray="1.5 2"
        strokeWidth={1.5}
        d="M13.196 2.071s-1.098 4.099 1.402 8.43c2.5 4.33 6.599 5.428 6.599 5.428M2.803 8.071s4.099 1.099 6.599 5.43c2.5 4.33 1.402 8.428 1.402 8.428"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTennis2;
