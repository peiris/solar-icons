import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimalisticMagniferZoomIn = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5 17.16 21.75 11.5 21.75 1.25 17.16 1.25 11.5ZM11.5 8.25a.75.75 0 0 1 .75.75v1.75H14a.75.75 0 0 1 0 1.5h-1.75V14a.75.75 0 0 1-1.5 0v-1.75H9a.75.75 0 0 1 0-1.5h1.75V9a.75.75 0 0 1 .75-.75Zm7.97 11.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMinimalisticMagniferZoomIn;
