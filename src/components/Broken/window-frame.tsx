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
        fill="currentColor"
        d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 9.5h20M9 21V10M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"
      />
    </svg>
  );
};
export default SvgWindowFrame;
