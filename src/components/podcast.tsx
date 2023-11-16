import * as React from "react";
import type { SVGProps } from "react";
const SvgPodcast = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0v-3ZM13 10h2M13 13h2M9 10h1m-1 3h1" />
      <path d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846" />
      <path d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2ZM18 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2ZM12 16v3" />
    </svg>
  );
};
export default SvgPodcast;
