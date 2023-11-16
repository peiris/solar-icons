import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 22H2M21 22v-9m-9.996-8c.018-1.24.11-1.943.582-2.414C12.172 2 13.114 2 15 2h2c1.886 0 2.828 0 3.414.586C21 3.172 21 4.114 21 6v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 22v-6M3 22v-9m0-4c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h4c1.886 0 2.828 0 3.414.586C15 6.172 15 7.114 15 9v3M9 22v-3M6 8h6M6 11h1m5 0H9.5M6 14h6"
      />
    </svg>
  );
};
export default SvgBuildings;
