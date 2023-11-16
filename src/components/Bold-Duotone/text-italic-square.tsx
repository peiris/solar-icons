import * as React from "react";
import type { SVGProps } from "react";
const SvgTextItalicSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10.667 6.25h2.65a.74.74 0 0 1 .033 0H16a.75.75 0 0 1 0 1.5h-2.09l-2.267 8.5h1.69a.75.75 0 0 1 0 1.5H8a.75.75 0 1 1 0-1.5h2.09l2.267-8.5h-1.69a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
};
export default SvgTextItalicSquare;
