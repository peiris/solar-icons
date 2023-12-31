import * as React from "react";
import type { SVGProps } from "react";
const SvgSpecialEffects = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6 8v-.75a.75.75 0 0 0-.75.75H6Zm4 .75a.75.75 0 0 0 0-1.5v1.5Zm0 4a.75.75 0 0 0 0-1.5v1.5Zm8.6-4.3a.75.75 0 1 0-1.2-.9l1.2.9Zm-7.2 7.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm1.2-8a.75.75 0 1 0-1.2.9l1.2-.9Zm4.8 8.9a.75.75 0 1 0 1.2-.9l-1.2.9ZM5.25 16a.75.75 0 0 0 1.5 0h-1.5ZM6 8.75h4v-1.5H6v1.5Zm0 4h4v-1.5H6v1.5Zm11.4-5.2-3 4 1.2.9 3-4-1.2-.9Zm-3 4-3 4 1.2.9 3-4-1.2-.9Zm-3-3.1 3 4 1.2-.9-3-4-1.2.9Zm3 4 3 4 1.2-.9-3-4-1.2.9ZM5.25 8v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgSpecialEffects;
