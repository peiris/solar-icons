import * as React from "react";
import type { SVGProps } from "react";
const SvgRestart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.873 7.873a7.253 7.253 0 0 1 7.928-1.563l1.13-1.13a8.75 8.75 0 1 0 4.751 6.727.75.75 0 0 0-1.488.187 7.25 7.25 0 1 1-12.32-4.22Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M18.721 4.201a.75.75 0 0 0-1.28-.53l-1.51 1.51-1.13 1.13-1.603 1.603a.75.75 0 0 0 .53 1.28h4.243a.75.75 0 0 0 .75-.75V4.2Z"
      />
    </svg>
  );
};
export default SvgRestart;
