import * as React from "react";
import type { SVGProps } from "react";
const SvgDropperMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19 15.883V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586C5 5.172 5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3ZM18.998 7.25H17a.75.75 0 0 0 0 1.5h2V8c0-.269 0-.518-.002-.75ZM19 10.25h-2a.75.75 0 0 0 0 1.5h2v-1.5ZM19 13.25h-2a.75.75 0 0 0 0 1.5h2v-1.5ZM14 4a2 2 0 1 0-4 0h4ZM11.25 20.235c.5.042 1 .042 1.5 0v1.015a.75.75 0 0 1-1.5 0v-1.015Z"
      />
    </svg>
  );
};
export default SvgDropperMinimalistic;
