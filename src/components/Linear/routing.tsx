import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting = (props: SVGProps<SVGSVGElement>) => {
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
        d="m20 19 .53.53a.75.75 0 0 0 0-1.06L20 19ZM8 4.25a.75.75 0 0 0 0 1.5v-1.5Zm10.53 12.22a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 4a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM20 18.25H7.5v1.5H20v-1.5Zm-12.5-5.5h9v-1.5h-9v1.5Zm9-8.5H8v1.5h8.5v-1.5Zm4.03 14.22-2-2-1.06 1.06 2 2 1.06-1.06Zm-1.06 0-2 2 1.06 1.06 2-2-1.06-1.06Zm1.28-9.97a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75h1.5Zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75v1.5ZM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5Z"
      />
      <circle cx={6} cy={5} r={2} stroke="currentColor"  />
    </svg>
  );
};
export default SvgRouting;
