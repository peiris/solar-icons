import * as React from "react";
import type { SVGProps } from "react";
const SvgSofa3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.75 17.75v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2H4.75Z"
      />
      <path
        fill="currentColor"
        d="M19.75 12.75c.966-3.884 1.395-5.903.384-7.322a4.002 4.002 0 0 0-.215-.275C18.72 3.75 16.48 3.75 11.999 3.75c-4.48 0-6.721 0-7.919 1.403-.075.089-.147.18-.215.275-1.011 1.42-.582 3.438.385 7.322l.2 1h15.1l.2-1Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSofa3;
