import * as React from "react";
import type { SVGProps } from "react";
const SvgWirelessCharge = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm0-1v1h1.5v-1h-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M12.857 7 10 10h4l-2.857 3"
      />
      <path
        stroke="currentColor"
        
        d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4.582 7A8 8 0 1 0 9 2.582"
      />
    </svg>
  );
};
export default SvgWirelessCharge;
