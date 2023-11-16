import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundAltArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8.47 12.97a.75.75 0 1 0 1.06 1.06L12 11.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3Z"
      />
    </svg>
  );
};
export default SvgRoundAltArrowUp;
