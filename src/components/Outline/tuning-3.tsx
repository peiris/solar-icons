import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 7.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5ZM5.25 10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM14.75 12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0ZM12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM22.75 14a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0ZM20 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0v5ZM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75ZM11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3ZM20 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75ZM3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0V5Z"
      />
    </svg>
  );
};
export default SvgTuning3;
