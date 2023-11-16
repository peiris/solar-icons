import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothWave = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13.263 8.262 8 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803ZM13.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54c0 .57-.579.982-1.737 1.804Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M3 15.5 8 12 3 8.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 5s2 2.1 2 7-2 7-2 7"
        opacity={0.7}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17 8s1 1.9 1 4-1 4-1 4"
        opacity={0.4}
      />
    </svg>
  );
};
export default SvgBluetoothWave;
