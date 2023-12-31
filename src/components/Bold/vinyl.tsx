import * as React from "react";
import type { SVGProps } from "react";
const SvgVinyl = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.631 10.488a1.881 1.881 0 1 1 0 3.762 1.881 1.881 0 0 1 0-3.762Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.487-18.716a.75.75 0 0 0-.975.716v5.56a3.381 3.381 0 1 0 1.5 2.81V5.093a8.045 8.045 0 0 1 4.273 4.868.75.75 0 1 0 1.43-.45 9.541 9.541 0 0 0-6.228-6.228Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVinyl;
