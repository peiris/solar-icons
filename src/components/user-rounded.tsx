import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} />
      <ellipse cx={12} cy={17} rx={7} ry={4} />
    </svg>
  );
};
export default SvgUserRounded;
