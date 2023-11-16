import * as React from "react";
import type { SVGProps } from "react";
const SvgReel = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.993 9.993 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Zm10-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-4.5-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgReel;
