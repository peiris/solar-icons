import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.473 12c0 .25.061.5.184.73l3.152 5.903c.74 1.388-.81 2.87-2.306 2.202l-16.51-7.363C2.33 13.178 2 12.59 2 12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.473 12c0-.25.061-.5.184-.73l3.152-5.903c.74-1.388-.81-2.87-2.306-2.202l-16.51 7.362C2.33 10.824 2 11.412 2 12"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMapArrowLeft;
