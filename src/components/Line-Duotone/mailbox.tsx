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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10.5 22v-2m4 2v-2"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11 20v.75h.75V20H11Zm3-.75a.75.75 0 0 0 0 1.5v-1.5Zm3.5-14a.75.75 0 0 0 0 1.5v-1.5ZM7 5.25a.75.75 0 0 0 0 1.5v-1.5Zm2 14a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4.75-9.5V20h1.5v-8.75h-1.5Zm.75 8H4.233v1.5H11v-1.5Zm-8.25-1.855V11.25h-1.5v6.145h1.5Zm1.483 1.855c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355v-1.5ZM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6v1.5Zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5v-1.5Zm14.75 6v6.175h1.5V11.25h-1.5Zm-1.457 8H14v1.5h5.793v-1.5Zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325h-1.5Zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5h1.5ZM7 6.75h11v-1.5H7v1.5Zm2 14h6v-1.5H9v1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5 16h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16 9.884V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.439.439 0 0 1 .542.427v2.221a.513.513 0 0 1-.393.499l-.066.016a3.199 3.199 0 0 1-1.9-.125 3.2 3.2 0 0 0-1.755-.156L16 5.41Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMailbox;
