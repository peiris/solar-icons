import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipVertical = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5.886 2h12.227c1.703 0 2.554 0 2.833.542.279.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.983 1.09C17.306 8 16.928 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166-.323-.166-.543-.474-.983-1.09l-1.13-1.582c-.989-1.385-1.483-2.077-1.204-2.62C3.333 2 4.184 2 5.886 2ZM5.886 22h12.227c1.703 0 2.554 0 2.833-.542.279-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.983-1.09C17.306 16 16.928 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166-.323.166-.543.474-.983 1.09l-1.13 1.581c-.989 1.386-1.483 2.078-1.204 2.62.279.543 1.13.543 2.832.543Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 12h4M18 12h4M2 12h4"
      />
    </svg>
  );
};
export default SvgFlipVertical;
