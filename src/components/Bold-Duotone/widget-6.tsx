import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget6 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123.211.107.384.28.491.491.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0ZM13 6.5a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714V6.5Z"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.125 1.125 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5ZM13 14.5c0-.349 0-.523.038-.666.104-.388.408-.692.796-.796.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5v-3Z" />
      </g>
    </svg>
  );
};
export default SvgWidget6;
