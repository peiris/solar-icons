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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 3H2M22 21h-4M2 21h12M9 8H8c-1.886 0-2.828 0-3.414.586C4 9.172 4 10.114 4 12c0 1.886 0 2.828.586 3.414C5.172 16 6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586C20 14.828 20 13.886 20 12c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8h-3"
      />
    </svg>
  );
};
export default SvgAlignVerticalSpacing;
