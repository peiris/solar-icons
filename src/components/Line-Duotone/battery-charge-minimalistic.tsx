import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryChargeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 14v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M11.5 9 9 12h3.5L10 15"
      />
    </svg>
  );
};
export default SvgBatteryChargeMinimalistic;
