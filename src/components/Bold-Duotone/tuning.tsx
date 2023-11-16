import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.752 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM3.752 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M7.462 6.584a3.007 3.007 0 0 0-1.5.021V2a.75.75 0 0 1 1.5 0v4.584ZM5.962 12.394a3.003 3.003 0 0 0 1.5.021V22a.75.75 0 0 1-1.5 0v-9.606ZM15.962 17.394V22a.75.75 0 0 0 1.5 0v-4.585a3.008 3.008 0 0 1-1.5-.021ZM17.462 11.584V2a.75.75 0 0 0-1.5 0v9.605a3.003 3.003 0 0 1 1.5-.021Z" />
      </g>
    </svg>
  );
};
export default SvgTuning;
