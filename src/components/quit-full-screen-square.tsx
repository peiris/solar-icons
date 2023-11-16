import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitFullScreenSquare = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73M9.998 17.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M14 6c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73" />
      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
    </svg>
  );
};
export default SvgQuitFullScreenSquare;
