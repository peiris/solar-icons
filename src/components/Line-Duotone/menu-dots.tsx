import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuDots = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={5} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle
        cx={12}
        cy={12}
        r={2}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <circle cx={19} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SvgMenuDots;
