import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M10.93 7.565a.75.75 0 1 0-.986-1.13l-3.437 3A.75.75 0 0 0 7 10.75h10a.75.75 0 0 0 0-1.5H9l1.93-1.685ZM7 14.75h8l-1.93 1.685a.75.75 0 0 0 .986 1.13l3.437-3A.75.75 0 0 0 17 13.25H7a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
};
export default SvgRoundTransferHorizontal;
