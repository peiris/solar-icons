import * as React from "react";
import type { SVGProps } from "react";
const SvgAltArrowDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="m8.303 12.404 3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723l-4.404 4.404Z"
      />
      <path
        fill="currentColor"
        d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481L11.293 8Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgAltArrowDown;
