import * as React from "react";
import type { SVGProps } from "react";
const SvgSleeping = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6v12M22 16v2m-10-2v-4.643c0-.798 0-1.197.112-1.518a2 2 0 0 1 1.227-1.227c.321-.112.72-.112 1.518-.112 1.995 0 2.992 0 3.794.28a5 5 0 0 1 3.068 3.069M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.5 11A2.5 2.5 0 1 0 7 13.5"
      />
    </svg>
  );
};
export default SvgSleeping;
