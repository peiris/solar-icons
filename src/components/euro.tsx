import * as React from "react";
import type { SVGProps } from "react";
const SvgEuro = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5M5 13.5h5" />
    </svg>
  );
};
export default SvgEuro;
