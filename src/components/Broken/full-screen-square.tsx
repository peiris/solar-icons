import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreenSquare = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M6 9.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73M6 14c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M17.998 9.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M17.998 14c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgFullScreenSquare;
