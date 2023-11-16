import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM21.5 6.5c0-1.886 0-2.828-.586-3.414C20.328 2.5 19.386 2.5 17.5 2.5c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414ZM10.5 17.5c0-1.886 0-2.828-.586-3.414C9.328 13.5 8.386 13.5 6.5 13.5c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414Z" />
    </svg>
  );
};
export default SvgWidget2;
