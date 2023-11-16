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
        fill="currentColor"
        d="M6.778 18.326C7.787 19 9.19 19 12 19c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13.374 8.457c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWatchSquareMinimalisticCharge;
