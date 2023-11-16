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
        fillRule="evenodd"
        d="M2.586 12.336C2 12.922 2 13.864 2 15.75c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414 0-1.886 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586H6c-1.886 0-2.828 0-3.414.586ZM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H7.86l-.209-.372-4-7ZM20.35 4.378a.75.75 0 1 1 1.301.744l-3.787 6.628h-1.723l.208-.372 4-7Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.084 3.5a4.752 4.752 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.752 4.752 0 0 0-4.39-2.934Z"
        clipRule="evenodd"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.085 6a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.251 2.251 0 0 0 12.085 6Z"
        clipRule="evenodd"
        opacity={0.7}
      />
      <path fill="currentColor" d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
};
export default SvgWiFiRouter;
