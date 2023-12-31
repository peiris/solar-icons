import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.47 16.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L18.94 19l-1.47-1.47a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="currentColor"
        d="M7.855 5.75a1.994 1.994 0 0 0 0-1.5H16.5a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l.75.75-.75.75H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H7.855Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgRouting;
