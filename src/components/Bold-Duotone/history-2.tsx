import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.1 2.398a.75.75 0 0 1-.43.97 9.187 9.187 0 0 0-.419.174.75.75 0 1 1-.608-1.371c.16-.072.323-.139.487-.203a.75.75 0 0 1 .97.43ZM5.648 4.241a.75.75 0 0 1-.026 1.06c-.11.105-.216.212-.32.321a.75.75 0 1 1-1.087-1.034c.121-.127.246-.252.373-.373a.75.75 0 0 1 1.06.026ZM3.161 7.26a.75.75 0 0 1 .38.99c-.06.138-.119.278-.173.42a.75.75 0 0 1-1.4-.54c.064-.165.131-.328.203-.488a.75.75 0 0 1 .99-.381Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHistory2;
