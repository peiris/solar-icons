import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignBottom = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 21h12M2 21h4M5 9v5.5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 17 6.565 17 7.5 17s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 3 8.435 3 7.5 3s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.161.28-.193.636-.2 1.25"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201Z"
      />
    </svg>
  );
};
export default SvgAlignBottom;
