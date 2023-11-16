import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleTopUp = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m13 11 9-9m0 0h-5.344M22 2v5.344M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10" />
    </svg>
  );
};
export default SvgCircleTopUp;
