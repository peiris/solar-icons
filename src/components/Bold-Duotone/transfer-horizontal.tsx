import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.25 4a.75.75 0 0 0-1.303-.507l-5.5 6A.75.75 0 0 0 4 10.75h16a.75.75 0 0 0 0-1.5h-9.75V4Z"
      />
      <path
        fill="currentColor"
        d="M13.75 20v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .553 1.257l-5.5 6A.75.75 0 0 1 13.75 20Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTransferHorizontal;
