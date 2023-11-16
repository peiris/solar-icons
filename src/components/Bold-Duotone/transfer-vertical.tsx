import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 10.25a.75.75 0 0 0 .507-1.303l-6-5.5A.75.75 0 0 0 13.25 4v16a.75.75 0 0 0 1.5 0v-9.75H20Z"
      />
      <path
        fill="currentColor"
        d="M4 13.75h5.25V4a.75.75 0 1 1 1.5 0v16a.75.75 0 0 1-1.257.553l-6-5.5A.75.75 0 0 1 4 13.75Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTransferVertical;
