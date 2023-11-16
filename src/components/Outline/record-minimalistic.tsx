import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.464 15.25A4.75 4.75 0 1 0 6 16.75h12a4.75 4.75 0 1 0-3.464-1.5H9.464ZM6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm12 6.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRecordMinimalistic;
