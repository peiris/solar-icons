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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 7v10M17 10v4M7 9v6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      />
    </svg>
  );
};
export default SvgSoundwaveCircle;
