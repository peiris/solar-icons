import * as React from "react";
import type { SVGProps } from "react";
const SvgDropperMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M19 15.883V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586C5 5.172 5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM19 8h-2M19 14h-2" />
      <path d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3ZM19 11h-2M12 21v1M14 4a2 2 0 1 0-4 0" />
    </svg>
  );
};
export default SvgDropperMinimalistic;
