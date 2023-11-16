import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmTurnOff = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.121 15.122 12 13m0 0L9.879 10.88M12 13l2.121-2.121M12 13l-2.121 2.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.5 4.5 4-2.5M20.5 4.5l-4-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.5 5.204A9 9 0 1 1 4.204 8.5"
      />
    </svg>
  );
};
export default SvgAlarmTurnOff;
