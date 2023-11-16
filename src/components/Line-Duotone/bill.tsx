import * as React from "react";
import type { SVGProps } from "react";
const SvgBill = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M17.625 21a1.693 1.693 0 0 1 2.25 0A.676.676 0 0 0 21 20.495V3.505A.676.676 0 0 0 19.875 3c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0A.676.676 0 0 0 3 3.505v16.99c0 .583.69.893 1.125.505a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0Z"
        opacity={0.4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7.5 15.5h9M7.5 12h9M7.5 8.5h9"
      />
    </svg>
  );
};
export default SvgBill;
