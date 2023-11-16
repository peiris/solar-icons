import * as React from "react";
import type { SVGProps } from "react";
const SvgUsersGroupRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={9} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.5 4.341a3 3 0 1 1 0 3.318"
        opacity={0.5}
      />
      <ellipse
        cx={9}
        cy={17}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={7}
        ry={4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgUsersGroupRounded;
