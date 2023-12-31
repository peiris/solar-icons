import * as React from "react";
import type { SVGProps } from "react";
const SvgJarOfPills = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.076 2.617C6 2.801 6 3.034 6 3.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 5 7.034 5 7.5 5h9c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C18 4.199 18 3.966 18 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 2 16.966 2 16.5 2h-9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM7.75 6 5.501 7.799a3.999 3.999 0 0 0-1.135 1.45H19.64a4 4 0 0 0-1.123-1.45L16.294 6H7.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 10.908c0-.053-.001-.105-.003-.158H4.004a4.012 4.012 0 0 0-.004.172v6.328h16v-6.342Zm-7.25 2.342V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.927 20.113a4 4 0 0 1-.743-1.363H19.82c-.152.492-.4.954-.732 1.358l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842Z"
      />
    </svg>
  );
};
export default SvgJarOfPills;
