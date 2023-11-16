import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntable = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-4.714 0-7.071 1.172-8.536C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.172 8.535C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m15 17 .894-.447A2 2 0 0 0 17 14.763V10.5"
      />
      <rect
        width={8}
        height={8}
        x={6}
        y={8}
        stroke="currentColor"
        
        rx={4}
      />
      <path
        stroke="currentColor"
        
        d="M15.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      />
    </svg>
  );
};
export default SvgTurntable;
