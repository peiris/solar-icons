import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM21 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 19V8"
      />
      <path
        fill="currentColor"
        d="M20.25 11.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5 0V6h-1.5v5.5h1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.735 3.755-4 1.333c-1.32.44-1.98.66-2.357 1.184C9 6.796 9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398-.831-.599-2.032-.198-4.435.603Z"
      />
    </svg>
  );
};
export default SvgMusicNote;