import * as React from "react";
import type { SVGProps } from "react";
const SvgBill1 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 2h20"
      />
      <path
        stroke="currentColor"
        
        d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601-.268.591-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47-1.127 0-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278V2Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8.5 13h7M8.5 8h7"
      />
    </svg>
  );
};
export default SvgBill1;
