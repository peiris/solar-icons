import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceScanCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
      <ellipse cx={15} cy={10.5} rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} rx={1} ry={1.5} />
      <path d="M2.2 10A10.012 10.012 0 0 1 10 2.2M2.2 14a10.012 10.012 0 0 0 7.8 7.8M21.8 10A10.012 10.012 0 0 0 14 2.2M21.8 14a10.012 10.012 0 0 1-7.8 7.8" />
    </svg>
  );
};
export default SvgFaceScanCircle;
