import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Zm13.47-12.34-3.511 9.166c-.319.83-1.483.857-1.731.04l-1.057-3.477a.836.836 0 0 0-.56-.56l-3.477-1.057c-.817-.248-.79-1.412.04-1.73l9.166-3.513a.863.863 0 0 1 1.13 1.131Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMapArrowSquare;
