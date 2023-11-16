import * as React from "react";
import type { SVGProps } from "react";
const SvgBicyclingRound = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.379-.59l.76-1.775a1.14 1.14 0 0 0-.591-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.158 1.719c.163.129.364.199.571.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.416 2.416 0 0 1-1.505-.526L10.92 8.506Z"
        clipRule="evenodd"
      />
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        opacity={0.5}
      >
        <path d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      </g>
    </svg>
  );
};
export default SvgBicyclingRound;
