import * as React from "react";
import type { SVGProps } from "react";
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2Zm-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8.256Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.656 3-5.4 18h2.088l5.4-18h-2.088Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTextItalic;
