import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclipRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m12.689 11.395-2.831 2.856c-.355.359-.533.538-.663.708a3.298 3.298 0 0 0 0 3.988c.13.17.308.35.663.708.355.358.533.538.702.668a3.223 3.223 0 0 0 3.951 0c.17-.13.347-.31.702-.668l3.672-3.705c1.424-1.437 2.136-2.156 2.525-2.926a5.503 5.503 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925-1.424-1.437-2.136-2.156-2.899-2.548a5.367 5.367 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548L4.446 8.906c-.8.807-1.2 1.21-1.473 1.607a5.499 5.499 0 0 0 0 6.242c.274.396.673.8 1.473 1.607" />
    </svg>
  );
};
export default SvgPaperclipRounded;
