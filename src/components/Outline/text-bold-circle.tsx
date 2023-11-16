import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBoldCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.25 7.522A2.272 2.272 0 0 1 9.522 5.25H12a3.75 3.75 0 0 1 2.665 6.389A3.75 3.75 0 0 1 13 18.75H9.176a1.926 1.926 0 0 1-1.926-1.927V7.522Zm1.5 3.728H12a2.25 2.25 0 0 0 0-4.5H9.522a.772.772 0 0 0-.772.772v3.728Zm0 1.5v4.073c0 .236.19.427.426.427H13a2.25 2.25 0 0 0 0-4.5H8.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextBoldCircle;
