import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 22v-8m0 0V4m0 10 2.47-.494a8.676 8.676 0 0 1 4.925.452 8.677 8.677 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 7.999 7.999 0 0 1-4.911-.334l-.204-.081a8.677 8.677 0 0 0-4.924-.452L5 4m0 0V2"
      />
    </svg>
  );
};
export default SvgFlag;
