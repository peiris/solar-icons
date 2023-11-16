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
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 4.5a4.752 4.752 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.752 4.752 0 0 0 16.5 4.5Z"
        clipRule="evenodd"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 7a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.251 2.251 0 0 0 16.5 7Z"
        clipRule="evenodd"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 15.75c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h12c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H6c-1.886 0-2.828 0-3.414-.586C2 18.578 2 17.636 2 15.75Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M17.25 8.75a.75.75 0 0 0-1.5 0v3h1.5v-3Z" />
    </svg>
  );
};
export default SvgWiFiRouterMinimalistic;
