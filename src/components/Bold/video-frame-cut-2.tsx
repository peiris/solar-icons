import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrameCut2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.138 2h-2.276a.5.5 0 0 0-.435.748L11.143 4H7.75v16h3.393l-.716 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.858 20h3.393V4h-3.393l.716-1.252A.5.5 0 0 0 13.138 2Zm-.28 18-.424-.74a.5.5 0 0 0-.868 0l-.423.74h1.714Zm0-16-.424.74a.5.5 0 0 1-.868 0L11.143 4h1.714Zm-.108 3.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM6.25 4.011c-1.705.036-2.696.193-3.371.868-.675.675-.832 1.666-.868 3.371H6.25V4.011ZM2 9.75v4.5h4.25v-4.5H2Zm.879 9.371c-.675-.675-.832-1.666-.868-3.371H6.25v4.24c-1.705-.037-2.696-.194-3.371-.869ZM17.75 8.25V4.011c1.705.036 2.696.193 3.371.868.675.675.832 1.666.868 3.371H17.75ZM22 9.75h-4.25v4.5H22v-4.5Zm-4.25 6h4.239c-.036 1.705-.193 2.696-.868 3.371-.675.675-1.666.832-3.371.868V15.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVideoFrameCut2;
