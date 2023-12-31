import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.626 1.25h.042a4.103 4.103 0 0 1 4.082 4.082V8A3.75 3.75 0 0 1 8 11.75a.25.25 0 0 0-.25.25v7.5a3.25 3.25 0 0 1-6.5 0V7.555A6.338 6.338 0 0 1 7.555 1.25H7.626Zm-.063 1.5h-.001A4.838 4.838 0 0 0 2.75 7.562v10.355h3.5V12c0-.966.784-1.75 1.75-1.75A2.25 2.25 0 0 0 10.25 8V5.339A2.603 2.603 0 0 0 7.662 2.75h-.098ZM6.25 19.417h-3.5v.083a1.75 1.75 0 1 0 3.5 0v-.083ZM8 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 8 4.25Zm5.266.7a.75.75 0 0 1 .884-.585 5.756 5.756 0 0 1 4.486 4.486.75.75 0 0 1-1.47.298 4.256 4.256 0 0 0-3.314-3.314.75.75 0 0 1-.586-.884ZM9.25 16.5a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Zm6.25-4.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm-1.5 1.5a.75.75 0 0 1 .75.75v4.25H17a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAirbudsLeft;
