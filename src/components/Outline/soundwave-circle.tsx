import * as React from "react";
import type { SVGProps } from "react";
const SvgSoundwaveCircle = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm0 3.5a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25Zm10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoundwaveCircle;
