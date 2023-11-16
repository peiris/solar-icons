import * as React from "react";
import type { SVGProps } from "react";
const SvgRecord = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={7} fill="currentColor" opacity={0.5} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRecord;
