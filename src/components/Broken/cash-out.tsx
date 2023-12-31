import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.889 3.75a.75.75 0 0 0 0-1.5v1.5ZM10 2.25a.75.75 0 0 0 0 1.5v-1.5Zm8.111 1.5c1.71 0 3.139 1.44 3.139 3.27h1.5c0-2.61-2.054-4.77-4.639-4.77v1.5ZM5.89 2.25c-2.585 0-4.639 2.16-4.639 4.77h1.5c0-1.83 1.429-3.27 3.139-3.27v-1.5ZM21.25 7.02c0 1.667-1.19 3.016-2.693 3.238l.22 1.484c2.265-.335 3.973-2.338 3.973-4.722h-1.5ZM5.443 10.258C3.939 10.036 2.75 8.688 2.75 7.02h-1.5c0 2.384 1.708 4.387 3.974 4.722l.22-1.484ZM10 3.75h8.111v-1.5H10v1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M12 9v5m0 0 2-2.333M12 14l-2-2.333"
      />
      <path
        stroke="currentColor"
        
        d="M5 10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h6c1.886 0 2.828 0 3.414.586C19 7.172 19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16v-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M5 17h8m6 0h-2"
      />
    </svg>
  );
};
export default SvgCashOut;
