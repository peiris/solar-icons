import * as React from "react";
import type { SVGProps } from "react";
const SvgFacemaskCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.998 12.193 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 .13.002.258.007.386l4.98 1.81 2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192l4.998-1.999Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5ZM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM15.766 21.267l.444-5.776-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A9.972 9.972 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733ZM21.824 13.878l-4.112 1.644-.38 4.94a10.009 10.009 0 0 0 4.492-6.584ZM6.668 20.461 6.29 15.54l-4.077-1.482a10.01 10.01 0 0 0 4.456 6.404Z"
      />
    </svg>
  );
};
export default SvgFacemaskCircle;
