import * as React from "react";
import type { SVGProps } from "react";
const SvgSadCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1" />
      <ellipse cx={15} cy={10.5} rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} rx={1} ry={1.5} />
    </svg>
  );
};
export default SvgSadCircle;
