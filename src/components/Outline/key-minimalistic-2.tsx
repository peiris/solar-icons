import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM7.25 9a7.75 7.75 0 1 1 2.824 5.983.711.711 0 0 1-.044.047L7.56 17.5l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.94.94.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.47.47a.75.75 0 0 1-1.06-1.06l1-1 5-5a.73.73 0 0 1 .047-.044A7.718 7.718 0 0 1 7.25 9ZM15 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeyMinimalistic2;
