import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouterRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 14a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Zm2.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5H12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.469 19.511-1.112 1.853a.75.75 0 0 0 1.286.772l1.432-2.386H7a4.997 4.997 0 0 1-1.531-.239ZM16.925 19.75l1.432 2.386a.75.75 0 0 0 1.286-.772l-1.112-1.853a4.998 4.998 0 0 1-1.531.24h-.075Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 3.5a4.752 4.752 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.752 4.752 0 0 0 16.5 3.5Z"
        clipRule="evenodd"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 6a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.251 2.251 0 0 0 16.5 6Z"
        clipRule="evenodd"
        opacity={0.7}
      />
      <path fill="currentColor" d="M17.5 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
};
export default SvgWiFiRouterRound;
