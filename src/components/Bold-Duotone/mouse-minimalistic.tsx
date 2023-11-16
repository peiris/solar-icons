import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};
export default SvgMouseMinimalistic;
