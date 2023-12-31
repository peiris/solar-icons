import * as React from "react";
import type { SVGProps } from "react";
const SvgTransmission = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 6v7m0 5v-2M4 18v-7m0-5v2M20 6v2c0 1.886 0 2.828-.586 3.414C18.828 12 17.886 12 16 12h-6m-6 0h2"
      />
      <path
        fill="currentColor"
        d="M18 15v-.75a.75.75 0 0 0-.75.75H18Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm4.11.392a.75.75 0 1 0 1.28-.784l-1.28.784ZM18 15.75h2.286v-1.5H18v1.5Zm.75 2.75V15h-1.5v3.5h1.5Zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5h-1.5Zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5v1.5Zm0 2h-.429v1.5h.429v-1.5Zm-.429 0H18v1.5h1.857v-1.5Zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5-1.28.784ZM17.25 18.5V22h1.5v-3.5h-1.5Z"
      />
    </svg>
  );
};
export default SvgTransmission;
