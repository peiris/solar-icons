import * as React from "react";
import type { SVGProps } from "react";
const SvgUnread = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m7 12.9 3.143 3.6 1.964-2.25M18 7.5 14.071 12"
      />
    </svg>
  );
};
export default SvgUnread;
