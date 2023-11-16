import * as React from "react";
import type { SVGProps } from "react";
const SvgDumbbellSmall = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889ZM4.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z" />
      <path d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1" />
    </svg>
  );
};
export default SvgDumbbellSmall;
