import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13 8h4M13 11h4M12 19v3"
      />
      <path
        fill="currentColor"
        d="M20.75 10a.75.75 0 0 0-1.5 0h1.5Zm-16 0a.75.75 0 0 0-1.5 0h1.5Zm10.762 7.344a.75.75 0 1 0 .728 1.312l-.728-1.312ZM19.25 10v1h1.5v-1h-1.5Zm-14.5 1v-1h-1.5v1h1.5ZM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75v-1.5ZM19.25 11a7.248 7.248 0 0 1-3.738 6.344l.728 1.312A8.748 8.748 0 0 0 20.75 11h-1.5Z"
      />
    </svg>
  );
};
export default SvgMicrophone;
