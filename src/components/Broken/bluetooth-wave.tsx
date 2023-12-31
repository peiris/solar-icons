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
        strokeLinecap="round"
        
        d="M13.263 4.655C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803L8 12V5.225c0-1.887 0-2.83.605-3.14.362-.185.783-.062 1.395.3"
      />
      <path
        stroke="currentColor"
        
        d="m13.263 19.345-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54c0 .57-.579.982-1.737 1.804Z"
      />
      <path
        fill="currentColor"
        d="M2.57 14.886a.75.75 0 1 0 .86 1.228l-.86-1.228Zm.86 1.228 5-3.5-.86-1.228-5 3.5.86 1.228Z"
      />
      <path
        fill="currentColor"
        d="M2.57 9.114a.75.75 0 0 1 .86-1.228l-.86 1.228Zm.86-1.228 5 3.5-.86 1.228-5-3.5.86-1.228Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 5s2 2.1 2 7c0 .728-.044 1.394-.12 2M19 19s.304-.32.675-1M17 8s1 1.9 1 4-1 4-1 4"
      />
    </svg>
  );
};
export default SvgBluetoothWave;
