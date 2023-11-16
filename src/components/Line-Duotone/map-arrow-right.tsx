import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowRight = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5.527 12c0-.25-.061-.5-.184-.73L2.191 5.368c-.74-1.388.81-2.87 2.306-2.202l16.51 7.362c.662.296.993.884.993 1.473"
      />
      <path
        stroke="currentColor"
        
        d="M5.527 12c0 .25-.061.5-.184.73l-3.152 5.903c-.74 1.388.81 2.87 2.306 2.202l16.51-7.363C21.67 13.178 22 12.59 22 12"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMapArrowRight;
