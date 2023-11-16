import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m14.859 16.5-2.461-2.461-.752.751c-.77.77-1.154 1.154-1.568 1.064-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58.525-.525 1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978.09.414-.294.798-1.064 1.568l-.751.752 2.46 2.461c.256.255.383.382.442.524a.774.774 0 0 1 0 .593c-.059.142-.186.27-.441.524-.255.255-.382.382-.524.441a.774.774 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441Z" />
      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
    </svg>
  );
};
export default SvgCursorSquare;