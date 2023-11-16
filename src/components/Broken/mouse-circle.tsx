import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16 14a4 4 0 0 1-8 0v-4a4 4 0 1 1 8 0M8.5 10H16M12 10V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 8.892V3.85c0-1.114-.905-2.037-1.987-1.817C5.442 2.962 2 7.034 2 11.917A10.1 10.1 0 0 0 3.362 17M16.364 2.842A10.091 10.091 0 0 1 22 11.917C22 17.486 17.523 22 12 22a9.89 9.89 0 0 1-5-1.349"
      />
    </svg>
  );
};
export default SvgMouseCircle;
