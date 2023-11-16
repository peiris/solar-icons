import * as React from "react";
import type { SVGProps } from "react";
const SvgSunset = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M8 22h8M5 19h14M2 16h20M12 6v7m0 0 2-2m-2 2-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393M10 6.341a6 6 0 0 1 6.5 9.627h-9A5.977 5.977 0 0 1 6 12c0-.701.12-1.374.341-2"
      />
    </svg>
  );
};
export default SvgSunset;
