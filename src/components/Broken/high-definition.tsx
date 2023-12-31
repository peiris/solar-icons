import * as React from "react";
import type { SVGProps } from "react";
const SvgHighDefinition = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.25 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm6.315-8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm3.907-.8V8.8h-1.5v6.4h1.5Zm.213.05c-.1 0-.169-.034-.202-.061-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55v-1.5Zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25v1.5Zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75v1.5Zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.321.321 0 0 1 .202-.061v-1.5ZM4.75 8v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm4.815-4v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm-4.065.75h4.815v-1.5H5.5v1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgHighDefinition;
