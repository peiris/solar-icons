import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleTopDown = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m21 3-9 9m0 0h5.344M12 12V6.656"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.955 9.955 0 0 1-5-1.338"
      />
    </svg>
  );
};
export default SvgCircleTopDown;
