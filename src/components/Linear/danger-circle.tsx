import * as React from "react";
import type { SVGProps } from "react";
const SvgDangerCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 7v6"
      />
      <circle cx={12} cy={16} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgDangerCircle;
