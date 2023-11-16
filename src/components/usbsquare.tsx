import * as React from "react";
import type { SVGProps } from "react";
const SvgUsbSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={17} r={1} />
      <circle cx={8} cy={9} r={1} />
      <path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 6l.53-.53a.75.75 0 0 0-1.06 0L12 6Zm.47 1.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2-1.06a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1 .06 1 1 1.06-1.06-1-1-1.06 1.06Zm0-1.06-1 1 1.06 1.06 1-1-1.06-1.06ZM12.75 16v-1.875h-1.5V16h1.5Zm0-1.875V6h-1.5v8.125h1.5Z" />
      <path d="M8 10v1.03a2 2 0 0 0 1.403 1.909l1.404.438A1.7 1.7 0 0 1 12 15M16 11v1.03a2 2 0 0 1-1.403 1.909l-1.404.438A1.7 1.7 0 0 0 12 16M15 10c0-.471 0-.707.146-.854C15.293 9 15.53 9 16 9s.707 0 .854.146C17 9.293 17 9.53 17 10s0 .707-.146.854C16.707 11 16.47 11 16 11s-.707 0-.854-.146C15 10.707 15 10.47 15 10Z" />
      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
    </svg>
  );
};
export default SvgUsbSquare;
