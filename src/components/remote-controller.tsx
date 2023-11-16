import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoteController = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15V9Z" />
      <path d="M15 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 5.5h6" />
      <circle cx={9} cy={9} r={1} />
      <circle cx={12} cy={9} r={1} />
      <circle cx={15} cy={9} r={1} />
    </svg>
  );
};
export default SvgRemoteController;
