import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVerticalCenter = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12h3m17 0h-3m-5 0h-4M5 13V7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 6.098 10 6.565 10 7.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 19 8.435 19 7.5 19s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.161-.28-.193-.636-.2-1.25"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"
      />
    </svg>
  );
};
export default SvgAlignVerticalCenter;
