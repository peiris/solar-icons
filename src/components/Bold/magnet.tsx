import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.25 2H13C7.477 2 3 6.477 3 12s4.477 10 10 10h3.25v-5H13a5 5 0 0 1 0-10h3.25V2ZM17.75 7h1.75A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2h-1.75v5ZM17.75 17v5h1.75a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5h-1.75Z"
      />
    </svg>
  );
};
export default SvgMagnet;
