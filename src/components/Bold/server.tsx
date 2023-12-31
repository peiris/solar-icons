import * as React from "react";
import type { SVGProps } from "react";
const SvgServer = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7c0 1.886 0 2.828-.586 3.414C20.828 11 19.886 11 18 11H6c-1.886 0-2.828 0-3.414-.586C2 9.828 2 8.886 2 7Zm4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Zm4.25.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17Zm4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Zm4.25.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgServer;
