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
      <path fill="currentColor" d="M7.75 4v16h8.5V4h-8.5Z" opacity={0.3} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.862 2h2.276a.5.5 0 0 1 .434.748L12.858 4h-1.714l-.716-1.252A.5.5 0 0 1 10.862 2Zm.28 18-.715 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.858 20h-1.714ZM2.88 4.879c.675-.675 1.666-.832 3.371-.868V8.25H2.01c.037-1.705.194-2.696.869-3.371ZM2 14.25v-4.5h4.25v4.5H2Zm.01 1.5c.037 1.705.194 2.696.869 3.371.675.675 1.666.832 3.371.868V15.75H2.01ZM17.75 4.011V8.25h4.239c-.036-1.705-.193-2.696-.868-3.371-.675-.675-1.666-.832-3.371-.868Zm0 5.739H22v4.5h-4.25v-4.5Zm4.239 6H17.75v4.24c1.705-.037 2.696-.194 3.371-.869.675-.675.832-1.666.868-3.371Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.434 4.74.423-.74h-1.714l.423.74a.5.5 0 0 0 .868 0ZM12 6.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 14.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12.857 20l-.423-.74a.5.5 0 0 0-.868 0l-.423.74h1.714Z"
      />
    </svg>
  );
};
export default SvgVideoFrameCut2;
