import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerSmileCircle2 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M2 12c0 5.523 4.477 10 10 10 .648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 17c-1.115 0-2.15-.37-3-1"
      />
      <ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <path
        stroke="currentColor"
        
        d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
      />
    </svg>
  );
};
export default SvgStickerSmileCircle2;
