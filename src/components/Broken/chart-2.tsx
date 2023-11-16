import * as React from "react";
import type { SVGProps } from "react";
const SvgChart2 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 17c0 .943 0 1.414.293 1.707C3.586 19 4.057 19 5 19c.943 0 1.414 0 1.707-.293C7 18.414 7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707C6.414 9 5.943 9 5 9c-.943 0-1.414 0-1.707.293C3 9.586 3 10.057 3 11v2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 7c0-.943 0-1.414.293-1.707C10.586 5 11.057 5 12 5c.943 0 1.414 0 1.707.293C14 5.586 14 6.057 14 7v10c0 .943 0 1.414-.293 1.707C13.414 19 12.943 19 12 19c-.943 0-1.414 0-1.707-.293C10 18.414 10 17.943 10 17V7Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11v6c0 .943 0 1.414-.293 1.707C20.414 19 19.943 19 19 19c-.943 0-1.414 0-1.707-.293C17 18.414 17 17.943 17 17V4c0-.943 0-1.414.293-1.707C17.586 2 18.057 2 19 2c.943 0 1.414 0 1.707.293C21 2.586 21 3.057 21 4v3"
      />
    </svg>
  );
};
export default SvgChart2;
