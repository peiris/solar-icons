import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmPause = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m3.5 4.5 4-2.5M20.5 4.5l-4-2.5M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5v-5ZM13 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5v-5Z" />
    </svg>
  );
};
export default SvgAlarmPause;
