import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylist2 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429c0-1.42 1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m18.675 7.116-1.755.842c-.341.164-.512.246-.636.373a1.001 1.001 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372.098-.102.175-.223.223-.356.061-.166.061-.356.061-.735 0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 5H3M13 9H3M9 13H3M8 17H3"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPlaylist2;
