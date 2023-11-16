import * as React from "react";
import type { SVGProps } from "react";
const SvgCardholder = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 11v-1c0-1.886 0-2.829-.586-3.415-.471-.471-1.174-.563-2.414-.581M7 11v-1c0-1.886 0-2.829.586-3.415.471-.471 1.174-.563 2.414-.581M5 11h14M8 16h1m7 0h-4"
      />
    </svg>
  );
};
export default SvgCardholder;
