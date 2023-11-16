import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreenCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M6 9.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73M6 14c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M17.998 9.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M17.998 14c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgFullScreenCircle;
