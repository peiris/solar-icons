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
        d="M19.75 12.75c.967-3.884 1.396-5.903.384-7.322a4.002 4.002 0 0 0-.215-.275C18.722 3.75 16.481 3.75 12 3.75c-4.48 0-6.72 0-7.918 1.403-.076.089-.148.18-.215.275-1.012 1.42-.583 3.438.384 7.322h15.5ZM4.75 17.75v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2H4.75Z"
      />
    </svg>
  );
};
export default SvgSofa3;
