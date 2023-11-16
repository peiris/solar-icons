import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrameReplace = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h5c1.886 0 2.828 0 3.414.586C15 3.172 15 4.114 15 6c0 1.886 0 2.828-.586 3.414C13.828 10 12.886 10 11 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6ZM10 18c0-1.886 0-2.828.586-3.414C11.172 14 12.114 14 14 14h3c1.886 0 2.828 0 3.414.586C21 15.172 21 16.114 21 18c0 1.886 0 2.828-.586 3.414C19.828 22 18.886 22 17 22h-3c-1.886 0-2.828 0-3.414-.586C10 20.828 10 19.886 10 18Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 2.5V10M13.5 14.5V22M11 2.5V10M17.5 14.5V22M2.5 6H6m9 0h-4M11 18h2.5m7.5 0h-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11v-1c0-.932 0-2.398-.152-2.765a2 2 0 0 0-1.083-1.083C19.398 6 18.932 6 18 6m3 5 1-1m-1 1-1-1M3 13v1c0 .932 0 2.398.152 2.765a2 2 0 0 0 1.083 1.083C4.602 18 5.068 18 6 18m-3-5-1 1m1-1 1 1"
      />
    </svg>
  );
};
export default SvgVideoFrameReplace;
