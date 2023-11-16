import * as React from "react";
import type { SVGProps } from "react";
const SvgBanknote = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C22 7.787 22 9.19 22 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19H9Z"
      />
      <path
        stroke="currentColor"
        
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5.5 15V9M18.5 15V9"
      />
    </svg>
  );
};
export default SvgBanknote;
