import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole3 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 10c5 0 4.6 12-3 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.312 14c-5 0-4.6-12 3-12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 12.312c0-2.78 3.707-3.89 7-3.024m5 6.024c0-1.97-.806-3.456-2-4.49M14 12c0 2.779-3.707 3.89-7 3.024M2 9c0 1.68.586 3.008 1.5 4.004"
      />
    </svg>
  );
};
export default SvgBlackHole3;
