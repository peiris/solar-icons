import * as React from "react";
import type { SVGProps } from "react";
const SvgCloset = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 2H10C6.229 2 4.343 2 3.172 3.172c-.844.843-1.08 2.057-1.146 4.078h9.224V2ZM2.002 8.75C2 9.142 2 9.558 2 10v3c0 .442 0 .858.002 1.25h9.248v-5.5H2.002Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.172 19.828c-.844-.843-1.08-2.057-1.146-4.078h9.224V21H10c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697ZM6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM12.75 21H14c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-1.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078H12.75V21ZM15 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM22 13c0 .442 0 .858-.002 1.25H12.75V2H14c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v3Zm-7-5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCloset;
