import * as React from "react";
import type { SVGProps } from "react";
const SvgSunFog = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M8 22h8M5 19h14M2 16h20"
      />
      <path
        stroke="currentColor"
        
        d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393"
      />
    </svg>
  );
};
export default SvgSunFog;
