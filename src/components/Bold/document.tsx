import * as React from "react";
import type { SVGProps } from "react";
const SvgDocument = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M4 5v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1Zm3.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="M4.409 4.087A1 1 0 0 1 5 5h12c.345 0 .68.044 1 .126v-.82a2 2 0 0 0-2.283-1.98L4.92 3.87a1.068 1.068 0 0 0-.511.218Z"
      />
    </svg>
  );
};
export default SvgDocument;
