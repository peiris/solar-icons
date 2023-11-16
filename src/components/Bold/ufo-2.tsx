import * as React from "react";
import type { SVGProps } from "react";
const SvgUfo2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.675 7.593C3.432 8.36 2 9.523 2 10.826 2 13.131 6.477 15 12 15s10-1.869 10-4.174c0-1.303-1.432-2.467-3.675-3.233-.124.29-.331.584-.668.819C16.869 8.96 15.3 9.5 12 9.5s-4.868-.54-5.657-1.088a1.893 1.893 0 0 1-.668-.819ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.055 7.005A4.73 4.73 0 0 1 11.729 3h.542a4.73 4.73 0 0 1 4.674 4.005.429.429 0 0 1-.145.175c-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82a.429.429 0 0 1-.145-.175ZM6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM18.75 17a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};
export default SvgUfo2;
