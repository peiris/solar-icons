import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowRightUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.536 3.464C19.07 2 16.714 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M15.579 9.172a.75.75 0 0 0-.75-.75h-4.243a.75.75 0 1 0 0 1.5h2.432l-4.376 4.376a.75.75 0 0 0 1.06 1.061l4.377-4.376v2.432a.75.75 0 0 0 1.5 0V9.172Z"
      />
    </svg>
  );
};
export default SvgSquareArrowRightUp;
