import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0V6Z"
      />
      <path
        stroke="currentColor"
        
        d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"
      />
      <path
        stroke="currentColor"
        
        d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPaletteRound;
