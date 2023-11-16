import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficEconomy = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12a10 10 0 0 1-18 6m-1.808-4.05A10 10 0 0 1 12 2M15 12h-3m0 0H9m3 0V9m0 3v3M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185"
      />
    </svg>
  );
};
export default SvgTrafficEconomy;
