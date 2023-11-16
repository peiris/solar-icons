import * as React from "react";
import type { SVGProps } from "react";
const SvgUsb = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={20} r={2} />
      <circle cx={6} cy={6} r={1} />
      <path d="M11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM12 2l.624-.416a.75.75 0 0 0-1.248 0L12 2Zm1.376 3.416a.75.75 0 1 0 1.248-.832l-1.248.832Zm-4-.832a.75.75 0 0 0 1.248.832l-1.248-.832Zm2-2.168 2 3 1.248-.832-2-3-1.248.832Zm0-.832-2 3 1.248.832 2-3-1.248-.832ZM12.75 18v-3h-1.5v3h1.5Zm0-3V2h-1.5v13h1.5Z" />
      <path d="M6 7v2.558a2 2 0 0 0 1.368 1.898l3.265 1.088A2 2 0 0 1 12 14.441V15M18 10v2.559a2 2 0 0 1-1.367 1.897l-3.265 1.088A2 2 0 0 0 12 17.442V18M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z" />
    </svg>
  );
};
export default SvgUsb;
