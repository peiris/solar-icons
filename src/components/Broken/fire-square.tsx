import * as React from "react";
import type { SVGProps } from "react";
const SvgFireSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.558 15c.277-.643.442-1.414.442-2.333 0-2.611-1.54-4.505-3-5.635-.748-.58-1.706.021-1.706.968 0 .643-.289 1.713-.873 2.501-.64.861-1.465.001-1.523-1.07-.026-.49-.534-.662-.942-.391C8.063 9.633 7 10.81 7 12.667 7 16.933 10.111 18 11.667 18a6.02 6.02 0 0 0 3.022-.86"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgFireSquare;
