import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M13.855 12.75a1.994 1.994 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5h-5.145ZM10.145 11.25a1.994 1.994 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5h5.145ZM11.855 19.25a1.994 1.994 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5h-7.145ZM8.145 19.25H5a.75.75 0 0 0 0 1.5h3.145a1.994 1.994 0 0 1 0-1.5ZM15.855 4.75a1.993 1.993 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5h-3.145ZM12.145 4.75a1.993 1.993 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5h7.145Z" />
      </g>
    </svg>
  );
};
export default SvgTuning4;
