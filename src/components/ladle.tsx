import * as React from "react";
import type { SVGProps } from "react";
const SvgLadle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M2 5.684a3.684 3.684 0 0 1 7.368 0v10a6.316 6.316 0 0 0 12.632 0V14.5" />
      <path d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5Z" />
    </svg>
  );
};
export default SvgLadle;
