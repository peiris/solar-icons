import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="#8E93A6"
        
        d="M20.47 10.918s-1.847-.615-4.31-3.078c-2.462-2.463-3.078-4.31-3.078-4.31"
      />
      <path
        fill="#8E93A6"
        d="M16.69 8.37a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-15.054.661a.75.75 0 0 0 .728 1.312L1.636 9.03Zm12.022 12.605a.75.75 0 0 0 1.31.728l-1.31-.728ZM4.47 18.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm8.248-15.595L1.636 9.03l.728 1.312 11.082-6.157-.728-1.311Zm7.096 7.679-6.156 11.082 1.31.728 6.157-11.082-1.31-.728ZM15.63 7.31 4.47 18.47l1.06 1.06L16.69 8.37l-1.06-1.06Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M13.082 10.918A5.224 5.224 0 1 0 20.47 3.53a5.224 5.224 0 0 0-7.388 7.388Z"
      />
    </svg>
  );
};
export default SvgSatellite;
