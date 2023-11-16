import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmTurnOff = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <circle cx={12} cy={13} r={9} />
      <path d="M14.122 15.122 12 13m0 0-2.12-2.12M12 13l2.122-2.121M12 13l-2.12 2.121M3.5 4.5l4-2.5M20.5 4.5l-4-2.5" />
    </svg>
  );
};
export default SvgAlarmTurnOff;
