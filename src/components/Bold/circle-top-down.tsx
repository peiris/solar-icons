import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleTopDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.482 6.7 17.43 9.752a2.25 2.25 0 0 1-.086 4.498H12A2.25 2.25 0 0 1 9.75 12V6.656a2.25 2.25 0 0 1 4.498-.086L17.3 3.518A9.953 9.953 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.953 9.953 0 0 0-1.518-5.3Z"
      />
    </svg>
  );
};
export default SvgCircleTopDown;
