import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlockRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} stroke="currentColor"  />
      <circle cx={17} cy={18} r={4} stroke="currentColor"  />
      <path stroke="currentColor"  d="m20 15-6 6" />
      <path
        stroke="currentColor"
        
        d="M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgUserBlockRounded;
