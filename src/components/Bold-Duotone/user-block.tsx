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
      <path fill="currentColor" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.735 2.735 0 0 0-1.373-.367Zm2.42 1.442-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728ZM12.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.996 14.521a4.25 4.25 0 0 0-3.979 7.429c-.608.033-1.278.05-2.017.05-8 0-8-2.015-8-4.5S7.582 13 12 13c2.387 0 4.53.588 5.996 1.521Z"
        opacity={0.4}
      />
    </svg>
  );
};
export default SvgUserBlock;
