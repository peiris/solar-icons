import * as React from "react";
import type { SVGProps } from "react";
const SvgSmileCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Z" />
      <ellipse cx={9} cy={10.5} rx={1} ry={1.5} />
    </svg>
  );
};
export default SvgSmileCircle;
