import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M6.142 6.142C8.904 3.381 10.284 2 12 2c1.716 0 3.096 1.38 5.858 4.142C20.619 8.904 22 10.284 22 12c0 1.716-1.38 3.096-4.142 5.858C15.096 20.619 13.716 22 12 22c-1.716 0-3.096-1.38-5.858-4.142C3.381 15.096 2 13.716 2 12c0-1.716 1.38-3.096 4.142-5.858Z" />
      <path d="M16 11.5 13.333 9M16 11.5 13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14" />
    </svg>
  );
};
export default SvgRoute;
