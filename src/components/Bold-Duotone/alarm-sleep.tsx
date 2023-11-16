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
      <path
        fill="currentColor"
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72H9Z"
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
export default SvgAlarmSleep;
