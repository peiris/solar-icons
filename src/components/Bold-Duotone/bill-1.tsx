import * as React from "react";
import type { SVGProps } from "react";
const SvgBill1 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 3.75v9.527c0 1.34 0 2.01.268 2.601.268.591.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47 1.127 0 2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915.269-.59.269-1.26.269-2.6V3.75H4Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM7.75 9a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBill1;
