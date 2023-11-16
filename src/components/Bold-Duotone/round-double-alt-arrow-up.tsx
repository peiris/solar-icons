import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundDoubleAltArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8.47 14.97a.75.75 0 1 0 1.06 1.06L12 13.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3Z"
      />
      <path
        fill="currentColor"
        d="M8.47 10.97a.75.75 0 1 0 1.06 1.06L12 9.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3Z"
      />
    </svg>
  );
};
export default SvgRoundDoubleAltArrowUp;
