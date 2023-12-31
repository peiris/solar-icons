import * as React from "react";
import type { SVGProps } from "react";
const SvgTreadmillRound = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.258 5.392a2.654 2.654 0 0 1 2.452-.19c1.726.74 2.16 2.99.832 4.317l-.33.33c-.132.131-.17.17-.194.198a1.25 1.25 0 0 0 .078 1.72c.027.026.068.06.212.18l.01.009a3.75 3.75 0 0 1 1.429 2.808c.003.07.003.143.003.248V16a.75.75 0 0 1-1.5 0v-.974c0-.124 0-.167-.002-.206a2.25 2.25 0 0 0-.743-1.588 6.172 6.172 0 0 0-.179-.15 5.258 5.258 0 0 1-.27-.235 2.75 2.75 0 0 1-.172-3.782c.065-.075.145-.154.248-.258l.02-.02.329-.329a1.154 1.154 0 0 0-1.428-1.794L4.897 8.636a.75.75 0 0 1-.795-1.272l3.156-1.972Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.147 7.735a.75.75 0 1 0-.294-1.47A4.38 4.38 0 0 0 18.38 9.91l-1.113 7.418L2.9 19.842A1.087 1.087 0 0 0 3.087 22h16.402a2.511 2.511 0 1 0-.433-4.985l-.23.04 1.037-6.922a2.88 2.88 0 0 1 2.284-2.398Z"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M11.789 9.763a.75.75 0 0 1 .948-.474c.82.273 1.706.273 2.526 0a.75.75 0 0 1 .474 1.423 5.493 5.493 0 0 1-3.474 0 .75.75 0 0 1-.474-.949ZM7.53 13.47a.75.75 0 0 1 0 1.06 5.871 5.871 0 0 1-4.151 1.72H3a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0Z" />
      </g>
    </svg>
  );
};
export default SvgTreadmillRound;
