import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkRoundAngle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m12.792 15.8 1.43-1.432a6.076 6.076 0 0 0 0-8.59 6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19" />
      <path d="m11.208 8.2-1.43 1.432a6.076 6.076 0 0 0 0 8.59 6.067 6.067 0 0 0 8.583 0l2.861-2.864A6.076 6.076 0 0 0 17.268 5" />
    </svg>
  );
};
export default SvgLinkRoundAngle;
