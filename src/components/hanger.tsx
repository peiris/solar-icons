import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.656 3.656 0 0 1 2.082.61l7.433 5.01c1.306.881.613 2.75-1.02 2.75H3.703c-1.616 0-2.32-1.835-1.048-2.73l7.096-4.991a3.641 3.641 0 0 1 2.05-.65Z" />
    </svg>
  );
};
export default SvgHanger;