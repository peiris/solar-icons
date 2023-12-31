import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceScanCircle = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M10.801 2.57a.711.711 0 0 1-.555.838 8.779 8.779 0 0 0-6.838 6.838.71.71 0 1 1-1.394-.283 10.2 10.2 0 0 1 7.949-7.949.71.71 0 0 1 .838.556ZM2.57 13.199a.71.71 0 0 1 .838.555 8.779 8.779 0 0 0 6.838 6.838.71.71 0 1 1-.283 1.394 10.2 10.2 0 0 1-7.948-7.949.711.711 0 0 1 .555-.838ZM13.199 2.57a.71.71 0 0 1 .838-.556 10.2 10.2 0 0 1 7.949 7.949.711.711 0 0 1-1.394.283 8.779 8.779 0 0 0-6.838-6.838.711.711 0 0 1-.555-.838ZM21.43 13.199a.711.711 0 0 1 .556.838 10.2 10.2 0 0 1-7.949 7.949.711.711 0 0 1-.283-1.394 8.779 8.779 0 0 0 6.838-6.838.71.71 0 0 1 .838-.555Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 19.583a7.583 7.583 0 1 0 0-15.166 7.583 7.583 0 0 0 0 15.166Zm-3.06-5.044a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69.71.71 0 1 1 .846 1.142 4.871 4.871 0 0 1-2.911.97c-1.086 0-2.09-.361-2.911-.97a.711.711 0 0 1-.148-.994Zm6.377-4.139c0 .688-.37 1.245-.829 1.245-.458 0-.83-.557-.83-1.245 0-.687.372-1.244.83-1.244.458 0 .83.557.83 1.244Zm-5.805 1.245c.458 0 .83-.557.83-1.245 0-.687-.372-1.244-.83-1.244-.458 0-.83.557-.83 1.244 0 .688.372 1.245.83 1.245Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFaceScanCircle;
