import * as React from "react";
import type { SVGProps } from "react";
const SvgWadOfMoney = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 5c-2.317.006-3.557.063-4.472.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104.915.611 2.155.668 4.472.674v-4.094a3.001 3.001 0 0 1 0-5.811V5ZM9.75 19h4.5V5h-4.5v14ZM15.75 5v4.095a3.001 3.001 0 0 1 0 5.81V19c2.317-.006 3.558-.063 4.472-.674a4.003 4.003 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104c-.915-.611-2.155-.668-4.472-.673Z"
      />
    </svg>
  );
};
export default SvgWadOfMoney;
