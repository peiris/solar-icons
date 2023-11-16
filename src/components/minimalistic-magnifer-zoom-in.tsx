import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimalisticMagniferZoomIn = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={11.5} cy={11.5} r={9.5} />
      <path d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2" />
    </svg>
  );
};
export default SvgMinimalisticMagniferZoomIn;
