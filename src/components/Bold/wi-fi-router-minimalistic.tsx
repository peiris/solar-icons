import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouterMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.11 7.434a4.752 4.752 0 0 1 8.78 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.586 12.336C2 12.922 2 13.864 2 15.75c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414 0-1.886 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586h-.75v-3a.75.75 0 0 0-1.5 0v3H6c-1.886 0-2.828 0-3.414.586ZM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.34 8.618a2.251 2.251 0 0 1 4.32 0 .75.75 0 1 0 1.44-.42 3.751 3.751 0 0 0-7.2 0 .75.75 0 0 0 1.44.42Z"
      />
    </svg>
  );
};
export default SvgWiFiRouterMinimalistic;
