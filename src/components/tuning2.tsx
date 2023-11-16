import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15 16.959h7M9 6.959H2M2 16.959h2M22 6.959h-2" />
    </svg>
  );
};
export default SvgTuning2;
