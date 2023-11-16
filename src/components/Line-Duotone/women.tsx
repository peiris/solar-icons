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
      <path
        fill="currentColor"
        d="M9.5 17.75a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 22a.75.75 0 1 0 1.5 0h-1.5Zm0-6v2.5h1.5V16h-1.5Zm.75 1.75H9.5v1.5H12v-1.5Zm2.5 0H12v1.5h2.5v-1.5Zm-3.25.75V22h1.5v-3.5h-1.5Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
};
export default SvgWomen;
