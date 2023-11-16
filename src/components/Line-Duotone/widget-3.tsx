import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget3 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
    </svg>
  );
};
export default SvgWidget3;
