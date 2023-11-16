import * as React from "react";
import type { SVGProps } from "react";
const SvgBombMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 14.5a8.25 8.25 0 0 1 13.53-6.34l1.69-1.69a.75.75 0 1 1 1.06 1.06l-1.69 1.69A8.25 8.25 0 1 1 1.25 14.5ZM9.5 7.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.835 6.83a.75.75 0 1 0-.67 1.341l1 .5a.75.75 0 1 0 .67-1.342l-1-.5ZM20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z"
      />
    </svg>
  );
};
export default SvgBombMinimalistic;
