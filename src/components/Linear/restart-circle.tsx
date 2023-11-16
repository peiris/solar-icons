import * as React from "react";
import type { SVGProps } from "react";
const SvgRestartCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.978 8.715-.442-.453a4.918 4.918 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.919 4.919 0 0 0 7.072 0 5.184 5.184 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
      />
    </svg>
  );
};
export default SvgRestartCircle;
