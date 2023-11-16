import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouterMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"
        opacity={0.4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"
        opacity={0.7}
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      </g>
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 16c0-1.886 0-2.828.586-3.414C3.172 12 4.114 12 6 12h12c1.886 0 2.828 0 3.414.586C22 13.172 22 14.114 22 16c0 1.886 0 2.828-.586 3.414C20.828 20 19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586C2 18.828 2 17.886 2 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16.5 12V9"
      />
    </svg>
  );
};
export default SvgWiFiRouterMinimalistic;
