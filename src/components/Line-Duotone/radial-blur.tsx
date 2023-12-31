import * as React from "react";
import type { SVGProps } from "react";
const SvgRadialBlur = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.956 9.956 0 0 0 4.197-4.731 9.985 9.985 0 0 0-.537-8.93 9.985 9.985 0 0 0-7.464-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        fill="currentColor"
        d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
      <path
        fill="currentColor"
        d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
};
export default SvgRadialBlur;
