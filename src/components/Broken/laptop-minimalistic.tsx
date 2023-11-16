import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptopMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3 10v4c0 1.886 0 2.828.586 3.414C4.172 18 5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586C21 16.828 21 15.886 21 14V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9c-2.828 0-4.243 0-5.121.879-.49.49-.707 1.146-.803 2.121M22 21h-6M2 21h10M15 15H9"
      />
    </svg>
  );
};
export default SvgLaptopMinimalistic;
