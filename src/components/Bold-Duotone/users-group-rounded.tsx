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
      <circle cx={15} cy={6} r={3} fill="currentColor" opacity={0.4} />
      <ellipse
        cx={16}
        cy={17}
        fill="currentColor"
        opacity={0.4}
        rx={5}
        ry={3}
      />
      <circle cx={9.001} cy={6} r={4} fill="currentColor" />
      <ellipse cx={9.001} cy={17.001} fill="currentColor" rx={7} ry={4} />
    </svg>
  );
};
export default SvgUsersGroupRounded;
