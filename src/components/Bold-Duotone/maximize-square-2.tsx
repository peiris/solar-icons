import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximizeSquare2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13.25 7c0 .414.336.75.75.75h1.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22V10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75ZM11.03 14.03a.75.75 0 1 0-1.06-1.06l-2.22 2.22V14a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H8.81l2.22-2.22ZM10.75 7a.75.75 0 0 1-.75.75H8.81l2.22 2.22a.75.75 0 1 1-1.06 1.06L7.75 8.81V10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 7 6.25h3a.75.75 0 0 1 .75.75ZM12.97 14.03a.75.75 0 1 1 1.06-1.06l2.22 2.22V14a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.19l-2.22-2.22Z"
      />
    </svg>
  );
};
export default SvgMaximizeSquare2;
