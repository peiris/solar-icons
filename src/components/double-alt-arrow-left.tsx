import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleAltArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m13 19-6-7 6-7" />
      <path d="m17 19-6-7 6-7" />
    </svg>
  );
};
export default SvgDoubleAltArrowLeft;
