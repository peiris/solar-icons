import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudSun2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 16.353C22 19.472 19.442 22 16.286 22H11m3.381-10.973a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765 2 20.104 3.919 22 6.286 22H7m.116-8.391a5.576 5.576 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228A5.724 5.724 0 0 1 20 12.061"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.5 2v.5M2.5 7.5H2M11.389 3.611l-.216.216M3.827 11.173l-.216.216M3.827 3.827l-.216-.216"
      />
    </svg>
  );
};
export default SvgCloudSun2;
