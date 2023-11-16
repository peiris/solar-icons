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
        fillRule="evenodd"
        d="M10.007 3.447a.75.75 0 0 1 .046 1.06L5.705 9.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.553-1.257l5.5-6a.75.75 0 0 1 1.06-.046ZM20.687 13.698A.75.75 0 0 0 20 13.25H4a.75.75 0 0 0 0 1.5h14.295l-4.348 4.743a.75.75 0 0 0 1.106 1.014l5.5-6a.75.75 0 0 0 .133-.809Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTransferHorizontal;
