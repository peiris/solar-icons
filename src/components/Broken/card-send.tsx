import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSend = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M19 20v-6m0 0 2 2m-2-2-2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4M10 16H6M13 16h-.5M2 10h5m15 0H11"
      />
    </svg>
  );
};
export default SvgCardSend;
