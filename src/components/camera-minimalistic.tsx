import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={13} r={3} />
      <path d="M10 20h4c2.809 0 4.214 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 20 7.19 20 10 20ZM18 10h-.5M15 3H9" />
    </svg>
  );
};
export default SvgCameraMinimalistic;
