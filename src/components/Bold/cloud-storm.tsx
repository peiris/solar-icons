import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudStorm = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.854 14.51a.75.75 0 0 1-.079 1.058L8.02 17.943h2.267a.75.75 0 0 1 .49 1.318L6.49 22.953a.75.75 0 1 1-.98-1.136l2.756-2.374H6a.75.75 0 0 1-.49-1.319l4.286-3.692a.75.75 0 0 1 1.058.078Zm4.676.46a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm2 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm-4 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.124 18.255a2.245 2.245 0 0 0-2.255-1.501 2.25 2.25 0 0 0-3.46-2.845l-.883.883a2.25 2.25 0 0 0-3.71-1.496l-4.285 3.692c-.379.327-.629.76-.73 1.228A4.215 4.215 0 0 1 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902Z"
      />
    </svg>
  );
};
export default SvgCloudStorm;
