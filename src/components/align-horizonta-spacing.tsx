import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignHorizontaSpacing = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3 2v20M21 2v20M12 4c-1.886 0-2.828 0-3.414.586C8 5.172 8 6.114 8 8v8c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20c1.886 0 2.828 0 3.414-.586C16 18.828 16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414C14.828 4 13.886 4 12 4Z" />
    </svg>
  );
};
export default SvgAlignHorizontaSpacing;
