import * as React from "react";
import type { SVGProps } from "react";
const SvgCropMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172C5 16.657 5 14.771 5 11V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 5h9c3.771 0 5.657 0 6.828 1.172C19 7.343 19 9.229 19 13v9"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCropMinimalistic;
