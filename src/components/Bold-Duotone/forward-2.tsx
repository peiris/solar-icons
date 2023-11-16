import * as React from "react";
import type { SVGProps } from "react";
const SvgForward2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.97 17.53a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L18.44 12l-4.47 4.47a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M17.69 12.75H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 1 1 1.5 0c0 1.756.715 2.78 1.563 3.391.887.639 1.974.859 2.687.859h8.19l.75.75-.75.75ZM20.193 12.287Z" />
      </g>
    </svg>
  );
};
export default SvgForward2;
