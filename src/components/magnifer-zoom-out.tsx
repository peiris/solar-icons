import * as React from "react";
import type { SVGProps } from "react";
const SvgMagniferZoomOut = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M18.5 18.5 22 22M9 11.5h5" />
    </svg>
  );
};
export default SvgMagniferZoomOut;
