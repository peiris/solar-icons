import * as React from "react";
import type { SVGProps } from "react";
const SvgWidgetAdd = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3"
      />
      <path
        stroke="currentColor"
        
        d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5ZM13.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414Z"
      />
      <path
        stroke="currentColor"
        
        d="M2.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWidgetAdd;
