import * as React from "react";
import type { SVGProps } from "react";
const SvgWheel = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.5}>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill="currentColor"
        d="m9.672 17.532 1.525-2.64a2.997 2.997 0 0 1-1.299-.751l-1.524 2.64c.397.301.832.555 1.298.75ZM6.046 12.75h3.048a3.006 3.006 0 0 1 0-1.5H6.047a6.059 6.059 0 0 0 0 1.5ZM8.374 7.22l1.524 2.64c.357-.351.802-.614 1.299-.751l-1.525-2.64c-.465.195-.901.449-1.298.75ZM12.803 9.109l1.525-2.64c.465.195.901.449 1.298.75l-1.524 2.64a2.996 2.996 0 0 0-1.299-.75ZM14.906 12.75a3.004 3.004 0 0 0 0-1.5h3.048a6.069 6.069 0 0 1 0 1.5h-3.049ZM12.803 14.891c.497-.137.942-.4 1.299-.75l1.524 2.64a5.993 5.993 0 0 1-1.298.75l-1.525-2.64Z"
      />
    </svg>
  );
};
export default SvgWheel;
