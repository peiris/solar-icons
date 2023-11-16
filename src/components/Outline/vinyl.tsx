import * as React from "react";
import type { SVGProps } from "react";
const SvgVinyl = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.746 1.976a.75.75 0 0 1-.672.82 9.251 9.251 0 1 0 10.13 10.13.75.75 0 1 1 1.493.149c-.54 5.433-5.122 9.676-10.697 9.676-5.937 0-10.75-4.814-10.75-10.75 0-5.575 4.243-10.158 9.676-10.697a.75.75 0 0 1 .82.672Zm2.81-.123a.75.75 0 0 1 .669-.11 10.774 10.774 0 0 1 7.033 7.032.75.75 0 1 1-1.431.45 9.278 9.278 0 0 0-5.077-5.683V12a3.75 3.75 0 1 1-1.5-3V2.457a.75.75 0 0 1 .306-.605Zm-.306 10.148a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVinyl;
