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
      <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.3} />
      <path
        fill="currentColor"
        d="M15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM19 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM19 14.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.75 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
};
export default SvgRadialBlur;
