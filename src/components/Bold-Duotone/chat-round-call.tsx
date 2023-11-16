import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundCall = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.775a.825.825 0 0 0-.825.825v8.8a.825.825 0 0 0 1.65 0V7.6A.825.825 0 0 0 12 6.775ZM7.6 8.975a.825.825 0 0 0-.825.825v4.4a.825.825 0 0 0 1.65 0V9.8a.825.825 0 0 0-.825-.825Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.575 9.8a.825.825 0 0 1 1.65 0v4.4a.825.825 0 0 1-1.65 0V9.8Z"
      />
    </svg>
  );
};
export default SvgChatRoundCall;
