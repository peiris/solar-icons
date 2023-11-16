import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowToDownRight = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.47 13.97a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06L12 18.44l-4.47-4.47a.75.75 0 0 0-1.06 0Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M11.25 9.5c0-.953.28-2.367 1.141-3.563.89-1.235 2.365-2.187 4.609-2.187a.75.75 0 0 1 0 1.5c-1.756 0-2.78.715-3.391 1.563-.639.887-.859 1.974-.859 2.687v8.19l-.75.75-.75-.75V9.5ZM11.802 20.224Z" />
      </g>
    </svg>
  );
};
export default SvgArrowToDownRight;
