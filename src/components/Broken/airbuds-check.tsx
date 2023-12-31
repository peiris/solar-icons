import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCheck = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0H6m4.5 0v-5M6 19v-5.7a1 1 0 0 0-1-1 3 3 0 0 1-3-3V7.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 4 5.013 4 5.188 4c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.557V10M19.5 5v2.5M4.5 7v2.5M22 18a4 4 0 1 0-4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m16.5 18.2.857.8 2.143-2"
      />
    </svg>
  );
};
export default SvgAirbudsCheck;
