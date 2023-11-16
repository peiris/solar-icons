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
        
        d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      />
      <path
        stroke="currentColor"
        
        d="M13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M2.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5Z"
      />
      <path
        stroke="currentColor"
        
        d="M13.5 6.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C13.5 9.328 13.5 8.386 13.5 6.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWidget2;
