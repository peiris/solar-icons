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
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 22 2)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 2.2c-.646-.131-1.315-.2-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-.685-.069-1.354-.2-2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgChatRoundUnread;
