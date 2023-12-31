import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm-5 4.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25Zm3.47 1.22a.75.75 0 0 1 1.06 0l1 1c.043.043.08.09.11.14.401-.23.865-.36 1.36-.36.495 0 .959.13 1.36.36a.752.752 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a.751.751 0 0 1-.14.11c.23.401.36.865.36 1.36 0 .495-.13.959-.36 1.36.05.03.097.067.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.751.751 0 0 1-.11-.14c-.401.23-.865.36-1.36.36-.495 0-.959-.13-1.36-.36a.751.751 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.751.751 0 0 1 .14-.11 2.738 2.738 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a.751.751 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06ZM14 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSafeCircle;
