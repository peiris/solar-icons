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
      <circle
        cx={12}
        cy={13}
        r={9}
        stroke="currentColor"
        
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.122 15.122 12 13m0 0L9.88 10.88M12 13l2.122-2.121M12 13 9.88 15.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m3.5 4.5 4-2.5M20.5 4.5l-4-2.5"
      />
    </svg>
  );
};
export default SvgAlarmTurnOff;
