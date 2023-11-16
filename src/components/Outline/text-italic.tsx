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
        d="M14.983 1.25H9a.75.75 0 0 0 0 1.5h4.992l-5.55 18.5H3a.75.75 0 1 0 0 1.5h5.983a.98.98 0 0 0 .034 0H15a.75.75 0 0 0 0-1.5h-4.992l5.55-18.5H21a.75.75 0 0 0 0-1.5H14.983Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextItalic;
