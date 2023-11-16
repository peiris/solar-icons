import * as React from "react";
import type { SVGProps } from "react";
const SvgWineglassTriangle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864L6.235 9h11.53l2.751-3.136C21.562 4.794 20.8 3 19.3 3ZM16.449 10.5H7.551l3.699 4.216v5.534H7.756a.75.75 0 1 0 0 1.5h8.488a.75.75 0 0 0 0-1.5H12.75v-5.533l3.699-4.217Z"
      />
    </svg>
  );
};
export default SvgWineglassTriangle;
