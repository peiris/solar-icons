import * as React from "react";
import type { SVGProps } from "react";
const SvgScanner = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9M2 12h20"
      />
    </svg>
  );
};
export default SvgScanner;
