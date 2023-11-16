import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketball = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.956 9.956 0 0 0 4.196-4.731 9.985 9.985 0 0 0-.536-8.93 9.985 9.985 0 0 0-7.465-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z" />
      <path d="M16.95 20.573S16.01 13.982 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073" />
      <path d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238M16.414 3.209c-1.488 4.42-8.74 9.303-14.125 8.243" />
    </svg>
  );
};
export default SvgBasketball;
