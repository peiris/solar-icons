import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferVertical = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M10 7v10l-3-3.437M14 17V7l3 3.438"
      />
    </svg>
  );
};
export default SvgRoundTransferVertical;
