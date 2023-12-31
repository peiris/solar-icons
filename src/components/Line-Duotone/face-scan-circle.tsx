import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceScanCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
      />
      <ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2.2 10A10.012 10.012 0 0 1 10 2.2M2.2 14a10.012 10.012 0 0 0 7.8 7.8M21.8 10A10.012 10.012 0 0 0 14 2.2M21.8 14a10.012 10.012 0 0 1-7.8 7.8"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgFaceScanCircle;
