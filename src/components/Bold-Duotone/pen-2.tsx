import * as React from "react";
import type { SVGProps } from "react";
const SvgPen2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19.08 7.372a3.147 3.147 0 0 0-4.45-4.45l-.71.71.031.089c.26.75.751 1.733 1.675 2.656a7.004 7.004 0 0 0 2.745 1.705l.71-.71Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m13.951 3.6-.03.03.03.09c.26.75.75 1.732 1.674 2.656A7.005 7.005 0 0 0 18.37 8.08l-6.85 6.85c-.462.462-.693.693-.948.891-.3.234-.625.435-.969.6-.291.138-.601.241-1.22.448l-3.268 1.09a.849.849 0 0 1-1.073-1.074l1.089-3.268c.206-.62.31-.93.448-1.22.164-.344.365-.67.6-.97.198-.254.429-.485.89-.947l6.882-6.88Z"
      />
    </svg>
  );
};
export default SvgPen2;
