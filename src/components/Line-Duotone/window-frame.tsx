import * as React from "react";
import type { SVGProps } from "react";
const SvgWindowFrame = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        fill="currentColor"
        d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        fill="currentColor"
        d="M2 8.75a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5ZM8.25 21a.75.75 0 0 0 1.5 0h-1.5Zm1.5-11a.75.75 0 0 0-1.5 0h1.5ZM2 10.25h20v-1.5H2v1.5ZM9.75 21V10h-1.5v11h1.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWindowFrame;
