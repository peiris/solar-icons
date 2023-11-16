import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVerticalSpacing = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M22 3H2M22 21H2M20 12c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586C4 9.172 4 10.114 4 12c0 1.886 0 2.828.586 3.414C5.172 16 6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586C20 14.828 20 13.886 20 12Z" />
    </svg>
  );
};
export default SvgAlignVerticalSpacing;
