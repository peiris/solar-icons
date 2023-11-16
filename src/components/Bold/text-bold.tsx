import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.609 1A3.609 3.609 0 0 0 4 4.609V19.94C4 21.631 5.37 23 7.059 23H14a6 6 0 0 0 2.102-11.621A6 6 0 0 0 12 1H7.609ZM12 11a4 4 0 0 0 0-8H7.609C6.72 3 6 3.72 6 4.609V11h6Zm-6 2v6.941C6 20.526 6.474 21 7.059 21H14a4 4 0 0 0 0-8H6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextBold;
