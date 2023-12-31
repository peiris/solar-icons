import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboard = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgSkateboard;
