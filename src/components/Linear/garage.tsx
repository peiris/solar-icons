import * as React from "react";
import type { SVGProps } from "react";
const SvgGarage = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 22H2M3 22V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4M9 15.5h6M9 18.5h6"
      />
      <path
        stroke="currentColor"
        
        d="M18 22v-6c0-1.886 0-2.828-.586-3.414C16.828 12 15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586C6 13.172 6 14.114 6 16v6"
      />
    </svg>
  );
};
export default SvgGarage;
