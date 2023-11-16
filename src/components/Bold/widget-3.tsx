import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0ZM11.25 17.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWidget3;
