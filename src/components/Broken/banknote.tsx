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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104.347.232.74.384 1.222.484M9 19h6c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104c-.347-.232-.74-.384-1.222-.484"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.5 15v-1m0-5v2.5M5.5 9v1m0 5v-2.5"
      />
    </svg>
  );
};
export default SvgBanknote;
