import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={13} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 20h4c2.809 0 4.214 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C5.787 20 7.19 20 10 20Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 10h-.5M15 3H9"
      />
    </svg>
  );
};
export default SvgCameraMinimalistic;
