import * as React from "react";
import type { SVGProps } from "react";
const SvgPills3 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242ZM20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286l3.524-3.524Z" />
      <path d="M14 14s.281 1.46 1.911 3.09C17.541 18.718 19 19 19 19" />
    </svg>
  );
};
export default SvgPills3;
