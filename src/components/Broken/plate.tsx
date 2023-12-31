import * as React from "react";
import type { SVGProps } from "react";
const SvgPlate = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.658 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4m6 0c3.114.01 4.765.108 5.828 1.17.654.654.943 1.529 1.07 2.83M12 5V3M8 10.5h8M8 14h5.5"
      />
    </svg>
  );
};
export default SvgPlate;
