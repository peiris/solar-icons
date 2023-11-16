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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104.347.232.74.384 1.222.484M9 19h6c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104c-.347-.232-.74-.384-1.222-.484"
      />
      <path
        stroke="currentColor"
        
        d="M9 9a3 3 0 1 0 0 6M15 9a3 3 0 1 1 0 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 5v14M15 5v14"
      />
    </svg>
  );
};
export default SvgWadOfMoney;
