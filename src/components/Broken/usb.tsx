import * as React from "react";
import type { SVGProps } from "react";
const SvgUsb = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={20} r={2} stroke="currentColor"  />
      <circle cx={6} cy={6} r={1} stroke="currentColor"  />
      <path
        fill="currentColor"
        d="M11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM12 2l.624-.416a.75.75 0 0 0-1.248 0L12 2Zm1.376 3.416a.75.75 0 1 0 1.248-.832l-1.248.832Zm-4-.832a.75.75 0 0 0 1.248.832l-1.248-.832ZM11.25 6.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5 3.25a.75.75 0 0 0-1.5 0h1.5Zm-1.374-7.334 2 3 1.248-.832-2-3-1.248.832Zm0-.832-2 3 1.248.832 2-3-1.248-.832ZM12.75 18v-3h-1.5v3h1.5Zm0-11.5V2h-1.5v4.5h1.5Zm0 8.5V9.75h-1.5V15h1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6 7v2.558a2 2 0 0 0 1.368 1.898l3.265 1.088A2 2 0 0 1 12 14.441V15M18 10v2.559a2 2 0 0 1-1.367 1.897l-3.265 1.088A2 2 0 0 0 12 17.442V18"
      />
      <path
        stroke="currentColor"
        
        d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z"
      />
    </svg>
  );
};
export default SvgUsb;
