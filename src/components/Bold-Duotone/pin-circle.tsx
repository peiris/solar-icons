import * as React from "react";
import type { SVGProps } from "react";
const SvgPinCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m15.592 9.903-1.483-1.484c-1.013-1.015-1.52-1.522-2.064-1.402-.544.12-.79.794-1.284 2.14l-.334.912c-.132.36-.197.539-.316.677a1.02 1.02 0 0 1-.18.166c-.148.107-.332.158-.7.26-.83.228-1.246.342-1.402.614a.765.765 0 0 0-.102.386c.002.314.306.618.915 1.228l.447.448-1.62 1.622a.75.75 0 0 0 1.062 1.06l1.618-1.621.473.473c.613.613.92.92 1.235.92a.762.762 0 0 0 .379-.1c.274-.156.389-.574.619-1.41.1-.368.152-.552.258-.7.046-.065.1-.124.16-.176.138-.12.316-.187.673-.32l.922-.347c1.332-.5 1.998-.75 2.115-1.293.118-.543-.385-1.046-1.391-2.053Z"
      />
    </svg>
  );
};
export default SvgPinCircle;
