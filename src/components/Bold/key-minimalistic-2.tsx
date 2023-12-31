import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M15 16a7 7 0 1 0-5.452-2.609L3.97 18.97l-1 1a.75.75 0 1 0 1.06 1.061l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.049-3.048A6.971 6.971 0 0 0 15 16Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeyMinimalistic2;
