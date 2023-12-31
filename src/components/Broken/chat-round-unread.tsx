import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundUnread = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={3}
        cy={3}
        r={3}
        stroke="currentColor"
        
        transform="matrix(-1 0 0 1 22 2)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 2.2a10.046 10.046 0 0 0-7 1.138M21.8 10c.131.646.2 1.315.2 2 0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgChatRoundUnread;
