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
        
        d="m12 14.571 8.516-8.707C21.562 4.794 20.8 3 19.3 3H4.701C3.2 3 2.438 4.794 3.484 5.864L12 14.57Zm0 0V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"
      />
    </svg>
  );
};
export default SvgWineglassTriangle;
