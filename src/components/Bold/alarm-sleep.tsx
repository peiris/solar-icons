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
        fillRule="evenodd"
        d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239Zm7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033ZM12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlarmSleep;
