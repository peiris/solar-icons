import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrameCut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.5 3.003c2.794.02 4.324.163 5.328 1.168C21 5.343 21 7.228 21 11v2c0 3.772 0 5.657-1.172 6.829-1.004 1.005-2.534 1.148-5.328 1.168m-5 0c-2.794-.02-4.324-.163-5.328-1.168C3 18.656 3 16.771 3 13v-2C3 7.227 3 5.342 4.172 4.17 5.176 3.166 6.706 3.023 9.5 3.003"
      />
      <path
        stroke="currentColor"
        strokeDasharray="3 3"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 2v20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 4v16M7 4v16M3.5 8.5H7m10 0h3.5m-3.5 7h3.5m-17 0H7"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgVideoFrameCut;
