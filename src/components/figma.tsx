import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12V2Z" />
      <path d="M12 8.667H8.667a3.333 3.333 0 0 0 0 6.666H12V8.666Z" />
      <path d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0ZM8.667 15.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z" />
      <path d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12V2Z" />
    </svg>
  );
};
export default SvgFigma;
