import * as React from "react";
import type { SVGProps } from "react";
const SvgWineglassTriangle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.244 21H7.756M4.701 3h14.598c1.5 0 2.263 1.794 1.217 2.864l-7.801 7.976a1 1 0 0 1-1.43 0L3.484 5.864C2.438 4.794 3.2 3 4.7 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 14.571V21M7.473 9.75h9.054"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWineglassTriangle;
