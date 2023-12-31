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
        fill="currentColor"
        d="M4.75 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 12a.75.75 0 0 0 1.5 0h-1.5Zm9.5-12a.75.75 0 0 0-1.5 0h1.5Zm-1.5 12a.75.75 0 0 0 1.5 0h-1.5Zm9.5-12a.75.75 0 0 0-1.5 0h1.5ZM4 11.25a.75.75 0 0 0 0 1.5v-1.5Zm15.414.164-.53-.53.53.53ZM3.25 6v12h1.5V6h-1.5Zm8 0v12h1.5V6h-1.5Zm8 0v2h1.5V6h-1.5ZM16 11.25H4v1.5h12v-1.5ZM19.25 8c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65.082-.606.08-1.372.08-2.294h-1.5ZM16 12.75c.922 0 1.688.002 2.294-.08.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3-.482.064-1.13.066-2.094.066v1.5Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M18 15v-.75a.75.75 0 0 0-.75.75H18Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm4.11.392a.75.75 0 1 0 1.28-.784l-1.28.784ZM18 15.75h2.286v-1.5H18v1.5Zm.75 2.75V15h-1.5v3.5h1.5Zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5h-1.5Zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5v1.5Zm0 2h-.429v1.5h.429v-1.5Zm-.429 0H18v1.5h1.857v-1.5Zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5-1.28.784ZM17.25 18.5V22h1.5v-3.5h-1.5Z"
      />
    </svg>
  );
};
export default SvgTransmission;
