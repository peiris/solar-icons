import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m12.398 14.039 2.461 2.46c.255.256.382.383.524.442.19.079.403.079.593 0 .142-.059.27-.186.524-.441.255-.255.382-.382.441-.524a.774.774 0 0 0 0-.593c-.059-.142-.186-.27-.441-.524l-2.461-2.461.751-.752c.77-.77 1.154-1.154 1.064-1.568-.091-.413-.602-.602-1.623-.978l-3.406-1.255c-2.037-.75-3.055-1.125-3.58-.6-.525.525-.15 1.543.6 3.58L9.1 14.231c.376 1.021.565 1.532.978 1.623.414.09.798-.294 1.568-1.064l.752-.751Z"
      />
    </svg>
  );
};
export default SvgCursorSquare;
