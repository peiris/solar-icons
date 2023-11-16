import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.656 3.656 0 0 1 2.082.61L16 12.668m-4.198-2.037a3.641 3.641 0 0 0-2.051.649L2.655 16.27C1.383 17.165 2.087 19 3.703 19h16.595c1.633 0 2.325-1.869 1.019-2.75L19 14.69"
      />
    </svg>
  );
};
export default SvgHanger;
