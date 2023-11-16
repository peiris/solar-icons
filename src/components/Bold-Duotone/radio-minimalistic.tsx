import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 14a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12.75 11a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM12.75 14a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM12.75 17a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.38 2.647a.75.75 0 1 0-.76-1.293l-7.99 4.7C7.474 6.003 8.477 6 9.679 6l5.7-3.353Z"
      />
    </svg>
  );
};
export default SvgRadioMinimalistic;
