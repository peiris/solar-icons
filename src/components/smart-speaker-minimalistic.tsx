import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartSpeakerMinimalistic = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M3.321 6.658a4.833 4.833 0 0 1 3.918-4.197l.215-.04a24.736 24.736 0 0 1 9.091 0l.323.06a4.701 4.701 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.838 4.838 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 0 1-5.169 0 51.167 51.167 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 46.932 46.932 0 0 1 0-10.689l.016-.137Z" />
      <path d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6" />
    </svg>
  );
};
export default SvgSmartSpeakerMinimalistic;
