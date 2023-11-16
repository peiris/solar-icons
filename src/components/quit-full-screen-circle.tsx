import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitFullScreenCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
    </svg>
  );
};
export default SvgQuitFullScreenCircle;
