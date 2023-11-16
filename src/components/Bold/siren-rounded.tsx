import * as React from "react";
import type { SVGProps } from "react";
const SvgSirenRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5Zm10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5V18.8Zm.845-7.581a.75.75 0 0 1 .977-.414 4.764 4.764 0 0 1 2.623 2.623.75.75 0 0 1-1.39.563 3.264 3.264 0 0 0-1.796-1.796.75.75 0 0 1-.414-.976Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM3.53 5.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Z"
      />
    </svg>
  );
};
export default SvgSirenRounded;
