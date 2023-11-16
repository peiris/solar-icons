import * as React from "react";
import type { SVGProps } from "react";
const SvgCosmetic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M11 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM16.5 20v-4m0 4h3m-3 0h-3M2 11v-.75a.75.75 0 0 0-.75.75H2Zm6 0h.75a.75.75 0 0 0-.75-.75V11Zm-6 .75h6v-1.5H2v1.5ZM7.25 11v6h1.5v-6h-1.5Zm-4.5 6v-6h-1.5v6h1.5ZM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75v-1.5ZM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17h-1.5Z" />
      <path d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618V11Z" />
    </svg>
  );
};
export default SvgCosmetic;
