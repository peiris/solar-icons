import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkRoundAngle = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m12.792 15.8 1.43-1.432a6.076 6.076 0 0 0 0-8.59 6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m11.208 8.2-1.43 1.432a6.076 6.076 0 0 0 0 8.59 6.067 6.067 0 0 0 8.583 0l2.861-2.864A6.076 6.076 0 0 0 17.268 5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgLinkRoundAngle;
