import * as React from "react";
import type { SVGProps } from "react";
const SvgScale = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12c0 4.714 0 7.07 1.465 8.535 1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536M11 2c-4.055.007-6.178.107-7.535 1.464C2.648 4.28 2.287 5.374 2.127 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 11 9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8"
      />
    </svg>
  );
};
export default SvgScale;
