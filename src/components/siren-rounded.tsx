import * as React from "react";
import type { SVGProps } from "react";
const SvgSirenRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 22v-6a8 8 0 1 0-16 0v6" />
      <path d="M14.29 11.5a4.014 4.014 0 0 1 2.21 2.21M2 22h20M12 2v3M21 6l-1.5 1.5M3 6l1.5 1.5M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 19v3" />
    </svg>
  );
};
export default SvgSirenRounded;
