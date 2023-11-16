import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM21.5 6.5c0-1.886 0-2.828-.586-3.414C20.328 2.5 19.386 2.5 17.5 2.5c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414ZM10.5 17.5c0-1.886 0-2.828-.586-3.414C9.328 13.5 8.386 13.5 6.5 13.5c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414Z"
      />
    </svg>
  );
};
export default SvgWidget2;
