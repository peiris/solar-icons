import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmSleep = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={12}
        cy={13}
        r={9}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.5 4.5 4-2.5M20.5 4.5l-4-2.5M9 10h6l-6 6h6"
      />
    </svg>
  );
};
export default SvgAlarmSleep;
