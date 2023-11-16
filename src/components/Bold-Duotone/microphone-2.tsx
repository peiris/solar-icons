import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.404 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5H17.701a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12.75 10.75c0 .414.336.75.75.75H17.701l.049-1.5H13.5a.75.75 0 0 0-.75.75ZM12.75 7.75c0 .414.336.75.75.75h4.25L17.701 7H13.5a.75.75 0 0 0-.75.75ZM9.75 7.75A.75.75 0 0 0 9 7H6.298L6.25 8.5H9a.75.75 0 0 0 .75-.75ZM9.75 10.75A.75.75 0 0 0 9 10H6.25l.048 1.5H9a.75.75 0 0 0 .75-.75Z"
      />
    </svg>
  );
};
export default SvgMicrophone2;
