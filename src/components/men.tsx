import * as React from "react";
import type { SVGProps } from "react";
const SvgMen = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={10} cy={14} r={8} />
      <path d="M22 2h.75a.75.75 0 0 0-.75-.75V2Zm-.75 5a.75.75 0 0 0 1.5 0h-1.5ZM17 1.25a.75.75 0 0 0 0 1.5v-1.5Zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5 1.06 1.06ZM21.25 2v5h1.5V2h-1.5ZM17 2.75h5v-1.5h-5v1.5Z" />
    </svg>
  );
};
export default SvgMen;
