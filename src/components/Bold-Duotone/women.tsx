import * as React from "react";
import type { SVGProps } from "react";
const SvgWomen = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={9} r={7} fill="currentColor" opacity={0.5} />
      <path
        fill="currentColor"
        d="M11.25 15.96v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7.091 7.091 0 0 1-1.5 0Z"
      />
    </svg>
  );
};
export default SvgWomen;
