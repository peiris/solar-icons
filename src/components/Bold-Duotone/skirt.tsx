import * as React from "react";
import type { SVGProps } from "react";
const SvgSkirt = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 5.5h4l1.96 16.178A23.377 23.377 0 0 1 12 22c-1.495 0-2.813-.125-3.962-.322L10 5.5Z"
        opacity={0.6}
      />
      <path
        fill="currentColor"
        d="M5.838 5.5 2.08 17.953c-.216.716.001 1.485.654 1.876.984.591 2.717 1.404 5.304 1.849L9.999 5.5H5.839Z"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        d="M21.266 19.83c.652-.392.87-1.161.654-1.877L18.162 5.5H14l1.96 16.178c2.587-.444 4.32-1.258 5.306-1.849Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M16.109 2H7.892c-.968 0-1.452 0-1.753.293-.301.293-.301.764-.301 1.707v1.5h12.325V4c0-.943 0-1.414-.301-1.707C17.562 2 17.077 2 16.109 2Z"
      />
    </svg>
  );
};
export default SvgSkirt;
