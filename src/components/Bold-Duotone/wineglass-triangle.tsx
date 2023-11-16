import * as React from "react";
import type { SVGProps } from "react";
const SvgWineglassTriangle = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864l7.801 7.976a1 1 0 0 0 1.43 0l7.801-7.976C21.562 4.794 20.8 3 19.3 3Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.006 21a.75.75 0 0 1 .75-.75h8.488a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.285 13.84a1 1 0 0 0 1.43 0L16.471 10H7.53l3.756 3.84Z"
      />
      <path
        fill="currentColor"
        d="M11.285 13.84a1 1 0 0 0 1.43 0l.035-.035v6.445h-1.5v-6.446l.035.037Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWineglassTriangle;
