import * as React from "react";
import type { SVGProps } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 2v4M8.5 3.706A9.003 9.003 0 0 0 3 12c0 2.305.867 4.408 2.292 6M15.5 3.706A9.003 9.003 0 0 1 9 20.488"
      />
    </svg>
  );
};
export default SvgPower;
