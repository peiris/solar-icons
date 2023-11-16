import * as React from "react";
import type { SVGProps } from "react";
const SvgBowling = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.5-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-2.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBowling;
