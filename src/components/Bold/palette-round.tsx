import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.802 5.798a1.224 1.224 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319h5.11ZM13.284 4.959l-1.055 1.055a2.5 2.5 0 0 0-.729 1.76v8.238c0 1.055 0 1.582.313 1.708.314.126.679-.255 1.409-1.016l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0ZM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPaletteRound;
