import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckRead = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.565 12.407a.75.75 0 1 0-1.13.986l1.13-.986ZM7.143 16.5l-.565.493a.75.75 0 0 0 1.13 0l-.565-.493Zm8.422-8.507a.75.75 0 1 0-1.13-.986l1.13.986Zm-5.059 3.514a.75.75 0 0 0 1.13.986l-1.13-.986Zm-.834 3.236a.75.75 0 1 0-1.13-.986l1.13.986Zm-6.237-1.35 3.143 3.6 1.13-.986-3.143-3.6-1.13.986Zm4.273 3.6 1.964-2.25-1.13-.986-1.964 2.25 1.13.986Zm3.928-4.5 1.965-2.25-1.13-.986-1.965 2.25 1.13.986Zm1.965-2.25 1.964-2.25-1.13-.986-1.964 2.25 1.13.986Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m20 7.563-4.286 4.5M11 16l.429.563 2.143-2.25"
      />
    </svg>
  );
};
export default SvgCheckRead;
