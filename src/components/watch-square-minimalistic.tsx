import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquareMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" />
      <path d="M12 9v3.077L14 14M7 2h10M7 22h10" />
    </svg>
  );
};
export default SvgWatchSquareMinimalistic;
