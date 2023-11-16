import * as React from "react";
import type { SVGProps } from "react";
const SvgRestart = (props: SVGProps<SVGSVGElement>) => {
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
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        clipPath="url(#Restart_svg__a)"
      >
        <path d="M19.729 10.929a8 8 0 1 1-2.072-3.585l.707.706" opacity={0.5} />
        <path d="M14.121 8.05h4.243V3.808" />
      </g>
      <defs>
        <clipPath id="Restart_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgRestart;
