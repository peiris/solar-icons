import * as React from "react";
import type { SVGProps } from "react";
const SvgStationMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.75 9.055C5.75 5.567 8.554 2.75 12 2.75s6.25 2.817 6.25 6.305a6.31 6.31 0 0 1-1.767 4.393.75.75 0 1 0 1.08 1.04 7.81 7.81 0 0 0 2.187-5.433c0-4.305-3.464-7.805-7.75-7.805s-7.75 3.5-7.75 7.805a7.81 7.81 0 0 0 2.22 5.469.75.75 0 0 0 1.075-1.048A6.31 6.31 0 0 1 5.75 9.055Z"
      />
      <path
        fill="currentColor"
        d="M8.55 9.055c0-1.93 1.55-3.483 3.45-3.483 1.9 0 3.45 1.554 3.45 3.483 0 .932-.362 1.777-.952 2.402a.75.75 0 1 0 1.09 1.03 4.986 4.986 0 0 0 1.362-3.432c0-2.747-2.21-4.983-4.95-4.983S7.05 6.308 7.05 9.055c0 1.348.533 2.573 1.398 3.47a.75.75 0 1 0 1.08-1.041 3.486 3.486 0 0 1-.978-2.43Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 8.75a2 2 0 0 1-1.04 1.755l2.246 6.741a.75.75 0 0 1 .011.033l1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484a.764.764 0 0 1 .011-.033l2.247-6.74A2 2 0 1 1 14 8.75Zm-2.5 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.96 8h2.92L12 12.372l-1.46 4.378Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStationMinimalistic;
