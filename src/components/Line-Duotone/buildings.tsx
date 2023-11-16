import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 22H2"
      />
      <path
        stroke="currentColor"
        
        d="M21 22V6c0-1.886 0-2.828-.586-3.414C19.828 2 18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M15 22V9c0-1.886 0-2.828-.586-3.414C13.828 5 12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586C3 6.172 3 7.114 3 9v13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 22v-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6 8h6M6 11h6M6 14h6"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBuildings;
