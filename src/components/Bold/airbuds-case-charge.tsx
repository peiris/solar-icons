import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCaseCharge = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06ZM7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Zm5.586 5.219a.75.75 0 0 0-1.172-.937l-2 2.5A.75.75 0 0 0 10 16.25h2.44l-1.026 1.282a.75.75 0 1 0 1.172.936l2-2.5A.75.75 0 0 0 14 14.75h-2.44l1.026-1.281Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAirbudsCaseCharge;
