import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory3 = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeDasharray="0.5 3.5"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.966 9.966 0 0 0-.832-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12c0-1.821-.487-3.53-1.338-5M12 2c1.821 0 3.53.487 5 1.338"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v4h4"
      />
    </svg>
  );
};
export default SvgHistory3;
