import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetooth = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.263 8.262 11 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803ZM16.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54c0 .57-.579.982-1.737 1.804Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m6 15.5 5-3.5-5-3.5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBluetooth;
