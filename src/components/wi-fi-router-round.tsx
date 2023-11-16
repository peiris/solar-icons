import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouterRound = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z" />
      <path d="M18.33 22.335a.75.75 0 1 0 1.34-.67l-1.34.67Zm-1-2 1 2 1.34-.67-1-2-1.34.67ZM5.67 22.335a.75.75 0 1 1-1.34-.67l1.34.67Zm1-2-1 2-1.34-.67 1-2 1.34.67ZM8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 15h6.5M21.583 5.397a5.502 5.502 0 0 0-10.167 0" />
      <path d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0" />
      <path d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
};
export default SvgWiFiRouterRound;
