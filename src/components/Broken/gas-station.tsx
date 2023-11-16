import * as React from "react";
import type { SVGProps } from "react";
const SvgGasStation = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M11 6H8c-.943 0-1.414 0-1.707.293C6 6.586 6 7.057 6 8c0 .943 0 1.414.293 1.707C6.586 10 7.057 10 8 10h3c.943 0 1.414 0 1.707-.293C13 9.414 13 8.943 13 8c0-.943 0-1.414-.293-1.707C12.414 6 11.943 6 11 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 17h5M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14M16 22v-7M3 22v-4m0-4V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h1c2.828 0 4.243 0 5.121.879C16 3.757 16 5.172 16 8v3"
      />
    </svg>
  );
};
export default SvgGasStation;
