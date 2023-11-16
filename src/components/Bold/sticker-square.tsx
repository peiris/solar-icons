import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerSquare = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        fillRule="evenodd"
        d="m16.5 21.839-.038.008h-.004c-.016.004-.031.008-.047.01l-.002.001.05-.01.041-.01Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 15c-.584 0-1.076 0-1.5.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045C15 20.924 15 21.416 15 22c.483 0 .954-.049 1.41-.142l.048-.01h.004l.038-.01a7.01 7.01 0 0 0 5.339-5.338c.105-.483.161-.985.161-1.5Z"
      />
      <path
        fill="currentColor"
        d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22h1.5v-.26c-.001-1.607-.002-2.765.318-3.749a6.5 6.5 0 0 1 4.173-4.173c.984-.32 2.142-.319 3.75-.318H22V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12Z"
      />
    </svg>
  );
};
export default SvgStickerSquare;
