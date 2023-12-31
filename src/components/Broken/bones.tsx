import * as React from "react";
import type { SVGProps } from "react";
const SvgBones = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M9.48 2.045v2.016c0 .556-.475.998-.96 1.272-.914.519-1.558 1.707-1.558 2.758a2.519 2.519 0 1 0 5.038 0 2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.758-.484-.274-.96-.716-.96-1.272V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 1 1 5.038 0 2.519 2.519 0 0 1 5.038 0c0 1.052-.644 2.24-1.559 2.758-.484.274-.96.716-.96 1.273V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgBones;
