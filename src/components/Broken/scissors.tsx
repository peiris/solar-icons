import * as React from "react";
import type { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        fill="currentColor"
        d="M5 21.25a.75.75 0 0 1 0 1.5v-1.5ZM8.75 19v.75h-1.5V19h1.5Zm-.498 1.868a.75.75 0 0 1-1.307-.736l1.307.736Zm9.094-19.236a.75.75 0 0 1 1.308.736l-1.308-.736ZM2.75 19A2.25 2.25 0 0 0 5 21.25v1.5A3.75 3.75 0 0 1 1.25 19h1.5Zm4.5 0A2.25 2.25 0 0 0 5 16.75v-1.5A3.75 3.75 0 0 1 8.75 19h-1.5ZM5 16.75A2.25 2.25 0 0 0 2.75 19h-1.5A3.75 3.75 0 0 1 5 15.25v1.5Zm1.945 3.382 10.401-18.5 1.308.736-10.402 18.5-1.307-.736Z"
      />
    </svg>
  );
};
export default SvgScissors;
