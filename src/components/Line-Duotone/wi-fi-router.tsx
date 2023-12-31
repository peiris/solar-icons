import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouter = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M2 15c0-1.886 0-2.828.586-3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15c0 1.886 0 2.828-.586 3.414C20.828 19 19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586C2 17.828 2 16.886 2 15Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 11 3 4M17 11l4-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 15h4"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17.167 5.397A5.502 5.502 0 0 0 7 5.397"
        opacity={0.4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"
        opacity={0.7}
      />
      <path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
};
export default SvgWiFiRouter;
