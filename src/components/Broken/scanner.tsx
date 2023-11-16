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
        strokeWidth={1.5}
        d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828.653.654 1.528.943 2.828 1.07M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2h1m7 7c0-3.771 0-4.657-1.172-5.828-.653-.654-1.528-.943-2.828-1.07M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9M2 12h6m14 0H12"
      />
    </svg>
  );
};
export default SvgScanner;
