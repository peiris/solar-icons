import * as React from "react";
import type { SVGProps } from "react";
const SvgBanknote2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h5c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11c0 2.828 0 4.243-.879 5.121C17.243 17 15.828 17 13 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11Z"
      />
      <path
        stroke="currentColor"
        
        d="M19 8.076c.975.096 1.631.313 2.121.803.88.878.88 2.293.88 5.121 0 2.828 0 4.243-.88 5.121-.878.88-2.293.88-5.12.88h-5c-2.83 0-4.244 0-5.122-.88-.49-.49-.707-1.146-.803-2.121"
      />
      <path
        stroke="currentColor"
        
        d="M13 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16 13V9M5 13V9"
      />
    </svg>
  );
};
export default SvgBanknote2;
