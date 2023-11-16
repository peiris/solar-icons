import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCaseOpen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 12.833c0-.781 0-1.172.207-1.442.053-.07.115-.131.184-.184.27-.207.66-.207 1.442-.207h14.334c.781 0 1.172 0 1.442.207.07.053.131.115.184.184.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-.167ZM3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2 4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942ZM20.5 5.941V4.625A2.625 2.625 0 0 0 17.875 2 4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2"
      />
    </svg>
  );
};
export default SvgAirbudsCaseOpen;
