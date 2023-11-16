import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartVacuumCleaner = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M9.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.21 15.904c.508-1.2.79-2.519.79-3.904 0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.385.282 2.704.79 3.904L2.706 16A3.75 3.75 0 0 0 8 21.295l.096-.086c1.2.51 2.519.791 3.904.791a9.967 9.967 0 0 0 3.904-.79l.096.085A3.75 3.75 0 0 0 21.295 16l-.086-.096Zm-.768 1.459a10.054 10.054 0 0 1-3.08 3.079 2.25 2.25 0 0 0 3.08-3.08ZM6.637 20.442a10.053 10.053 0 0 1-3.08-3.08 2.25 2.25 0 0 0 3.08 3.08ZM12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartVacuumCleaner;
