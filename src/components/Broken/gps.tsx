import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12.5 14.959a3 3 0 1 1 2.459-2.459M2 12h2M20 12h2M12 4V2M12 22v-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 5.07A8 8 0 1 1 5.07 8"
      />
    </svg>
  );
};
export default SvgGps;
