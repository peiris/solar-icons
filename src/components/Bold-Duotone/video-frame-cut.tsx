import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrameCut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.5 3.003h5c.648.005 1.229.016 1.75.043v17.907c-.521.027-1.102.038-1.75.043h-5a39.89 39.89 0 0 1-1.75-.043V3.046a39.835 39.835 0 0 1 1.75-.043Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12 1.25a.75.75 0 0 1 .75.75V3.667a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM11.25 22v-1.667a.75.75 0 0 1 1.5 0V22a.75.75 0 0 1-1.5 0ZM12.75 7a.75.75 0 0 0-1.5 0v3.333a.75.75 0 0 0 1.5 0V7ZM12.75 13.667a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.5 0v-3.333ZM6.25 3.202c-.9.161-1.56.45-2.078.97-.772.77-1.035 1.852-1.125 3.578H6.25V3.202ZM3.006 9.25C3 9.783 3 10.365 3 11v2c0 .635 0 1.216.006 1.75H6.25v-5.5H3.006ZM4.172 19.828c-.772-.771-1.035-1.853-1.125-3.578H6.25v4.547c-.9-.161-1.56-.45-2.078-.969ZM17.75 7.75V3.202c.9.161 1.56.45 2.078.97.772.77 1.035 1.852 1.125 3.578H17.75ZM20.994 9.25H17.75v5.5h3.244C21 14.216 21 13.635 21 13v-2c0-.635 0-1.217-.006-1.75ZM17.75 16.25h3.203c-.09 1.725-.353 2.807-1.125 3.578-.518.519-1.177.808-2.078.969V16.25Z"
      />
    </svg>
  );
};
export default SvgVideoFrameCut;