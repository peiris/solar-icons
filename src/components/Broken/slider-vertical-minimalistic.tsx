import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVerticalMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2c-2.828 0-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22c2.828 0 4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4M21 4.5v15M3 4.5v15"
      />
    </svg>
  );
};
export default SvgSliderVerticalMinimalistic;
