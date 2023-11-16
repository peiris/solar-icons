import * as React from "react";
import type { SVGProps } from "react";
const SvgShareCircle = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M12 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM5.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM18.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 13a7.98 7.98 0 0 0-2.708-6M4 13a7.98 7.98 0 0 1 2.708-6M10 20.748c.64.165 1.31.252 2 .252s1.36-.087 2-.252"
      />
    </svg>
  );
};
export default SvgShareCircle;
