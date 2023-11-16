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
        d="M8.75 11.25H12a2.25 2.25 0 0 0 0-4.5H9.522a.772.772 0 0 0-.772.772v3.728ZM8.75 12.75v4.073c0 .236.19.427.426.427H13a2.25 2.25 0 0 0 0-4.5H8.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.25-4.478A2.272 2.272 0 0 1 9.522 5.25H12a3.75 3.75 0 0 1 2.665 6.389A3.75 3.75 0 0 1 13 18.75H9.176a1.926 1.926 0 0 1-1.926-1.927V7.522Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextBoldCircle;
