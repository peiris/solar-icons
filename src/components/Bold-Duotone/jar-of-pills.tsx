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
        d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5ZM4 10.923v6.629a4 4 0 0 0 .025.448h15.951c.016-.144.024-.29.024-.435v-6.657c0-.308-.036-.613-.105-.908H4.108c-.071.3-.108.609-.108.922Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M5.501 7.799 9.001 5h6.017l1.142.891 2.357 1.908A4 4 0 0 1 19.896 10H4.108a4 4 0 0 1 1.393-2.201ZM4.025 18a4 4 0 0 0 .902 2.113c.366.438.549.658.75.842a4 4 0 0 0 2.153 1.008C8.1 22 8.386 22 8.957 22h6.685a4 4 0 0 0 3.088-1.457l.358-.435A4 4 0 0 0 19.977 18H4.025Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgJarOfPills;
