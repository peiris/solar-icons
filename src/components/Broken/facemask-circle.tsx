import * as React from "react";
import type { SVGProps } from "react";
const SvgFacemaskCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.5 20.5 17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"
      />
      <ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgFacemaskCircle;
