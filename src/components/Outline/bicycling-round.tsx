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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM11.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm-.331 4.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719c.162.129.363.199.57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.417 2.417 0 0 1-1.505-.526L10.92 8.506ZM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBicyclingRound;
