import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget3 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" />
    </svg>
  );
};
export default SvgWidget3;
