import * as React from "react";
import type { SVGProps } from "react";
const SvgSocket = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6.584 9.413a6 6 0 1 1 0 5.174M12 18v-1.5M12 7.5V6"
      />
      <circle cx={14} cy={12} r={1} fill="currentColor" />
      <circle cx={10} cy={12} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgSocket;
