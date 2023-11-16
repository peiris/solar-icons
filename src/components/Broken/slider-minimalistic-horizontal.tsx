import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderMinimalisticHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.5 3h15M4.5 21h15M8 6c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121C3.757 18 5.172 18 8 18h8c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6h-4"
      />
    </svg>
  );
};
export default SvgSliderMinimalisticHorizontal;
