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
        d="m21.824 13.878-4.112 1.645-.38 4.938a10.008 10.008 0 0 0 4.492-6.583ZM15.766 21.267l.444-5.776-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A9.972 9.972 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733ZM6.668 20.461l-.379-4.922-4.077-1.482a10.011 10.011 0 0 0 4.456 6.404Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.998 12.193 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 .13.002.258.007.386l4.98 1.81 2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192l4.998-1.999ZM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFacemaskCircle;
