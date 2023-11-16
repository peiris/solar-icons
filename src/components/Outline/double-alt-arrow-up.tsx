import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleAltArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.512 6.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 7.987l-6.512 5.581a.75.75 0 1 1-.976-1.138l7-6Zm-7 10 7-6a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 11.987l-6.512 5.581a.75.75 0 1 1-.976-1.138Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDoubleAltArrowUp;
