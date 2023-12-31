import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitFullScreenCircle = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73M9.998 17.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M14 6c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgQuitFullScreenCircle;
