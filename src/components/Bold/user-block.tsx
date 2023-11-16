import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlock = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.735 2.735 0 0 0-1.373-.367Zm2.42 1.442-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728ZM12.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM14.295 13.188A5.752 5.752 0 0 0 11.938 22C4 21.99 4 19.979 4 17.5c0-2.485 3.582-4.5 8-4.5.798 0 1.568.066 2.295.188Z"
      />
    </svg>
  );
};
export default SvgUserBlock;
