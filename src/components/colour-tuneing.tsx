import * as React from "react";
import type { SVGProps } from "react";
const SvgColourTuneing = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12h7.5M22 12h-7.5M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10 0-6.842-1.66-10-3.928-10-1.734 0-4 3-4 6.316" />
    </svg>
  );
};
export default SvgColourTuneing;
