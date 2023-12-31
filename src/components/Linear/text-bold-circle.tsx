import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBoldCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      />
      <path
        stroke="currentColor"
        
        d="M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 1 1 0 6H8V7.522ZM8 12h5a3 3 0 1 1 0 6H9.176C8.526 18 8 17.473 8 16.823V12Z"
      />
    </svg>
  );
};
export default SvgTextBoldCircle;
