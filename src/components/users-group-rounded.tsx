import * as React from "react";
import type { SVGProps } from "react";
const SvgUsersGroupRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={9} cy={6} r={4} />
      <path d="M15 9a3 3 0 1 0 0-6" />
      <ellipse cx={9} cy={17} rx={7} ry={4} />
      <path d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37" />
    </svg>
  );
};
export default SvgUsersGroupRounded;
