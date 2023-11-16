import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleTopUp = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m13 11 9-9m0 0h-5.344M22 2v5.344"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCircleTopUp;
