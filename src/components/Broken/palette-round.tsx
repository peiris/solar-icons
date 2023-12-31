import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"
      />
      <path
        stroke="currentColor"
        
        d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"
      />
      <path
        fill="currentColor"
        d="M18 22v-.75.75Zm0-8v.75V14Zm4 4h-.75.75Zm-9 4.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-1.5-6.5H18v-1.5h-2.5v1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18h1.5ZM13 21.25H6v1.5h7v-1.5Zm5 0h-1v1.5h1v-1.5Z"
      />
      <path
        stroke="currentColor"
        
        d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgPaletteRound;
