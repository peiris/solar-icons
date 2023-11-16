import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabase = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4 18V6M20 6v12"
      />
      <path
        stroke="currentColor"
        
        d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z"
      />
      <path
        stroke="currentColor"
        
        d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  );
};
export default SvgDatabase;
