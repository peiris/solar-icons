import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipNext = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0V5Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648l10.79-6.968Z"
      />
    </svg>
  );
};
export default SvgSkipNext;
