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
        fill="currentColor"
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14.652 10.349a.75.75 0 0 1 0 1.06L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06l-1.59-1.59-1.592 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.24 2.34a.719.719 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.719.719 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23ZM15.76 2.34a.734.734 0 0 1 1.005-.23l3.892 2.41a.719.719 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.719.719 0 0 1-.233-.996Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlarmTurnOff;
