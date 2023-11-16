import * as React from "react";
import type { SVGProps } from "react";
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 22h10"
      />
      <path
        stroke="currentColor"
        
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
      <path
        fill="currentColor"
        d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgReel2;
