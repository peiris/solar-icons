import * as React from "react";
import type { SVGProps } from "react";
const SvgFacemaskCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M16.5 20.5 17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2" />
      <ellipse cx={15} cy={10.5} rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} rx={1} ry={1.5} />
    </svg>
  );
};
export default SvgFacemaskCircle;
