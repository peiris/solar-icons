import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone3 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8ZM11 8h2M10 11h4" />
      <path d="M20 10v1a8 8 0 1 1-16 0v-1M12 19v3" />
    </svg>
  );
};
export default SvgMicrophone3;
