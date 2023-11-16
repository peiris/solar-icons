import * as React from "react";
import type { SVGProps } from "react";
const SvgSun2 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={5} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 2v2M12 20v2M4 12H2M22 12h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m19.778 4.223-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSun2;
