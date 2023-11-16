import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} stroke="currentColor"  />
      <ellipse
        cx={12}
        cy={17}
        stroke="currentColor"
        
        rx={7}
        ry={4}
      />
    </svg>
  );
};
export default SvgUserRounded;
