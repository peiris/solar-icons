import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 2H8.667a3.333 3.333 0 0 0 0 6.667H12V2Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M12 8.667H8.667a3.333 3.333 0 0 0 0 6.666H12V8.666Z"
      />
      <path
        stroke="currentColor"
        
        d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0ZM8.667 15.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12V2Z"
      />
    </svg>
  );
};
export default SvgFigma;
