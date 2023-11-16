import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnet = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M17 2h2.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H17m0-5h-4C7.477 2 3 6.477 3 12s4.477 10 10 10h4m0-20v5m0 0h-4a5 5 0 0 0 0 10h4m0 0h2.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H17m0-5v5" />
    </svg>
  );
};
export default SvgMagnet;
