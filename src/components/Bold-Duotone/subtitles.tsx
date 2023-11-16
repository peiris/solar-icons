import * as React from "react";
import type { SVGProps } from "react";
const SvgSubtitles = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM18.75 13a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75ZM11.75 16a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM12.25 13a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .75-.75ZM15.75 16a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM7.75 13a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Z"
      />
    </svg>
  );
};
export default SvgSubtitles;
