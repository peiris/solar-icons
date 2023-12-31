import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbuds = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18m-4.5 0v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.313c0-.29 0-.436.006-.558a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004.83.04 1.57.417 2.09.996M13.5 18H18M10.5 18v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0H6m4.5 0v-4M6 18v-5.7a1 1 0 0 0-1-1 3 3 0 0 1-3-3V6.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 3 5.013 3 5.188 3c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.558V10M19.5 6v2.5M4.5 6v2.5"
      />
    </svg>
  );
};
export default SvgAirbuds;
