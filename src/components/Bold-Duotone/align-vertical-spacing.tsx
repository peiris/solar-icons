import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVerticalSpacing = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-18A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M4 12c0 1.886 0 2.828.586 3.414C5.172 16 6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586C20 14.828 20 13.886 20 12c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586C4 9.172 4 10.114 4 12Z"
      />
    </svg>
  );
};
export default SvgAlignVerticalSpacing;
