import * as React from "react";
import type { SVGProps } from "react";
const SvgServerPath = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 19h-8M2 19h8M12 17v-3"
      />
      <circle cx={12} cy={19} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 14H5a3 3 0 1 1 0-6h14a3 3 0 1 1 0 6h-1M12 2h7a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6h3M13 5h6M13 11h6"
      />
      <circle cx={6} cy={5} r={1} fill="currentColor" />
      <circle cx={6} cy={11} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgServerPath;
