import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoteControllerMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15V9Z"
      />
      <path
        stroke="currentColor"
        
        d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <circle cx={12} cy={5} r={1} fill="currentColor" />
      <circle cx={12} cy={17} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgRemoteControllerMinimalistic;
