import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrame2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 2.031A1.002 1.002 0 0 0 11 2H7.75v4.25h3.5V2.031ZM11.25 7.75H2V14c0 .452 0 .867.004 1.25h9.246v-7.5ZM11.25 16.75h-3.5V20l.917.001h2.583v-3.25ZM6.25 2.023c-1.61.055-2.588.239-3.274.856-.75.675-.924 1.666-.964 3.371H6.25V2.023ZM6.25 16.75v3.227c-1.61-.055-2.588-.239-3.274-.856-.59-.53-.823-1.256-.915-2.37H6.25Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M12.75 7.006V4h3.5v4.25h-3.5V7.006ZM12.75 16.006V9.75H22V16c0 .452 0 .867-.004 1.25H12.75v-1.244ZM12.75 21.969A1 1 0 0 0 13 22h3.25v-3.25h-3.5v3.218ZM17.75 8.25V4.023c1.61.055 2.588.239 3.274.856.75.675.924 1.666.964 3.371H17.75ZM21.94 18.75h-4.19v3.227c1.61-.055 2.588-.239 3.274-.856.59-.53.823-1.256.915-2.37Z" />
      </g>
    </svg>
  );
};
export default SvgVideoFrame2;
