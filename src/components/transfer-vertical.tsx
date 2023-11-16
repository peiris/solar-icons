import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferVertical = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M10 4v16l-6-5.5M14 20V4l6 5.5" />
    </svg>
  );
};
export default SvgTransferVertical;
