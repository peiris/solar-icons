import * as React from "react";
import type { SVGProps } from "react";
const SvgGolf = (props: SVGProps<SVGSVGElement>) => {
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
      <ellipse
        cx={12}
        cy={18.5}
        fill="currentColor"
        opacity={0.3}
        rx={10}
        ry={3.5}
      />
      <path
        fill="currentColor"
        d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504.054.027c.734.367 1.36.68 1.796.984.442.309.906.757.906 1.449 0 .693-.464 1.14-.906 1.449-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};
export default SvgGolf;
