import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquareMinimalisticCharge = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.857 9 10 12h4l-2.857 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 2h10M7 22h10"
      />
    </svg>
  );
};
export default SvgWatchSquareMinimalisticCharge;
