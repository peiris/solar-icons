import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTubeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.187 15.049a4.085 4.085 0 0 0 0 5.758 4.042 4.042 0 0 0 5.734 0l3.746-3.762-1.772-.736a2.356 2.356 0 0 1-1.408-1.906 2.352 2.352 0 0 0-2.074-2.082h-1.51l-2.716 2.728Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.363 2.233a.8.8 0 0 1 1.13.003l7.274 7.305a.8.8 0 0 1-1.134 1.129L13.36 3.364a.8.8 0 0 1 .003-1.13Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.09 4.098 3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.042 4.042 0 0 0 5.734 0L19.824 9.856l-5.734-5.76Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgTestTubeMinimalistic;
