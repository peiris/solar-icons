import * as React from "react";
import type { SVGProps } from "react";
const SvgSiren = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8c-2.8 0-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v6"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h20M12 2v3M21 5l-1.5 1.5M3 5l1.5 1.5"
      />
      <path
        stroke="currentColor"
        
        d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 19v3"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSiren;
