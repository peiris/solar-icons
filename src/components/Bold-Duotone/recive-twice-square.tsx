import * as React from "react";
import type { SVGProps } from "react";
const SvgReciveTwiceSquare = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M6.25 8.5A.75.75 0 0 1 7 7.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM6.25 15.5a.75.75 0 0 1 .75-.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM16.25 18a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0v12Z"
      />
    </svg>
  );
};
export default SvgReciveTwiceSquare;
