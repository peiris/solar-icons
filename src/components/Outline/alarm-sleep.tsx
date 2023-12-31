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
        d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239Zm7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033ZM12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13ZM9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlarmSleep;
