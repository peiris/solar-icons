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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.979 21.536C15.513 21.831 13.813 22 12 22c-5.523 0-10-1.567-10-3.5S6.477 15 12 15s10 1.567 10 3.5c0 .548-.36 1.066-1 1.527M12 18V2M12 3.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789 0 .618-.78 1.008-2.342 1.789L12 12.5"
      />
    </svg>
  );
};
export default SvgGolf;
