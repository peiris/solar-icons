import * as React from "react";
import type { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293"
      />
    </svg>
  );
};
export default SvgLogout;
