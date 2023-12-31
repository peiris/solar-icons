import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartSpeaker = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.507 14.615c.877.765 3.318 2.635 9.493 2.635v-1.5c-5.807 0-7.9-1.736-8.507-2.266l-.986 1.131ZM12 17.25c3.15 0 5.325-.48 6.823-1.066 1.509-.59 2.3-1.278 2.685-1.632l-1.015-1.104c-.298.273-.933.836-2.217 1.339-1.294.507-3.278.963-6.276.963v1.5Z"
      />
      <path
        stroke="currentColor"
        
        d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 4.412c-.32.275-.5.673-.5 1 0 1.153 1.739 2 4.5 2s4.5-.847 4.5-2c0-.327-.18-.636-.5-.912"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M3.321 6.658a4.833 4.833 0 0 1 3.918-4.197l.215-.04a24.736 24.736 0 0 1 9.091 0l.323.06a4.701 4.701 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.838 4.838 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 0 1-5.169 0 51.167 51.167 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 46.932 46.932 0 0 1 0-10.689l.016-.137Z"
      />
    </svg>
  );
};
export default SvgSmartSpeaker;
