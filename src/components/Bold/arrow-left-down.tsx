import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97 6.97-6.97Z"
      />
    </svg>
  );
};
export default SvgArrowLeftDown;
