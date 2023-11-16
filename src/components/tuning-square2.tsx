import * as React from "react";
import type { SVGProps } from "react";
const SvgTuningSquare2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
      <path d="M10 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      <circle cx={2} cy={2} r={2} transform="matrix(0 -1 -1 0 16 10)" />
      <path d="M14 16h5M10 8H5M5 16h1M19 8h-1" />
    </svg>
  );
};
export default SvgTuningSquare2;