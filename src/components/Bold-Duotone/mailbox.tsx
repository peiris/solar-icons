import * as React from "react";
import type { SVGProps } from "react";
const SvgMailbox = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395V11.25Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11 11.25V20h8.793C21.012 20 22 18.847 22 17.425V11.25C22 8.35 19.985 6 17.5 6h-11C8.985 6 11 8.35 11 11.25Z"
        opacity={0.8}
      />
      <path
        fill="currentColor"
        d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2H9.5ZM15 20h-1.5v2a.75.75 0 0 0 1.5 0v-2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM17.385 6.585l.256-.052a2.181 2.181 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109-.396.1-.812.071-1.193-.081l-.073-.03a3.517 3.517 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72V6.586Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMailbox;
