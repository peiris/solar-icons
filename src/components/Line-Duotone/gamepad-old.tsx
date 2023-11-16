import * as React from "react";
import type { SVGProps } from "react";
const SvgGamepadOld = (props: SVGProps<SVGSVGElement>) => {
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
      <g clipPath="url(#Gamepad_Old_svg__a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          
          d="M8 10v4m-2-2h4"
          opacity={0.5}
        />
        <g fill="currentColor" opacity={0.5}>
          <path d="M16 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </g>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          
          d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0"
          opacity={0.5}
        />
        <path
          stroke="currentColor"
          
          d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12Z"
        />
      </g>
      <defs>
        <clipPath id="Gamepad_Old_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgGamepadOld;
