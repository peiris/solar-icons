import * as React from "react";
import type { SVGProps } from "react";
const SvgWadOfMoney = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M9 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 7.787 22 9.19 22 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19H9Z" />
      <path d="M9 9a3 3 0 1 0 0 6M15 9a3 3 0 1 1 0 6M9 5v13.5M15 5v13.5" />
    </svg>
  );
};
export default SvgWadOfMoney;
