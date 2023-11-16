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
        d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.609 14.452a7.045 7.045 0 0 1-1.06-1.06l-6.58 6.578a.75.75 0 1 0 1.061 1.06l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.049-3.048Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgKeyMinimalistic2;
