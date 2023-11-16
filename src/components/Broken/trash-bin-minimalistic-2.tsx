import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashBinMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.5 6h-17M9.17 4a3.001 3.001 0 0 1 5.66 0M18.374 15.4c-.177 2.654-.266 3.981-1.131 4.79-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0-.2 3"
      />
    </svg>
  );
};
export default SvgTrashBinMinimalistic2;
