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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.978 8.715-.442-.453a4.918 4.918 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.919 4.919 0 0 0 7.072 0 5.184 5.184 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgRestartCircle;
