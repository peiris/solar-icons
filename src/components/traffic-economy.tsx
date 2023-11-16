import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficEconomy = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M22 12A10 10 0 1 1 12 2M15 12h-3m0 0H9m3 0V9m0 3v3M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185" />
    </svg>
  );
};
export default SvgTrafficEconomy;
