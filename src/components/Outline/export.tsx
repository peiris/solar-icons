import * as React from "react";
import type { SVGProps } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.47 7.53a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V14a.75.75 0 0 0 1.5 0V5.81l1.72 1.72Z"
      />
      <path
        fill="currentColor"
        d="M20.75 12a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0 .75.75 0 0 0-1.5 0 8.75 8.75 0 1 0 17.5 0Z"
      />
    </svg>
  );
};
export default SvgExport;
